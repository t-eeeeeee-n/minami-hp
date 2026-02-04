import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getCategories, saveCategories, Category } from "@/lib/s3";
import { v4 as uuidv4 } from "uuid";

// 認証チェック
async function checkAuth() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
  }
  return null;
}

// カテゴリ一覧取得
export async function GET() {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const categories = await getCategories();
    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "カテゴリの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// カテゴリ作成
export async function POST(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const data = await request.json();
    const categories = await getCategories();

    // slug の重複チェック
    if (categories.some((c) => c.slug === data.slug)) {
      return NextResponse.json(
        { error: "このスラッグは既に使用されています" },
        { status: 400 }
      );
    }

    const newCategory: Category = {
      id: uuidv4(),
      name: data.name,
      slug: data.slug,
      createdAt: new Date().toISOString(),
    };

    categories.push(newCategory);
    await saveCategories(categories);

    return NextResponse.json({ category: newCategory });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "カテゴリの作成に失敗しました" },
      { status: 500 }
    );
  }
}

// カテゴリ更新
export async function PUT(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const data = await request.json();
    const categories = await getCategories();

    const index = categories.findIndex((c) => c.id === data.id);
    if (index === -1) {
      return NextResponse.json(
        { error: "カテゴリが見つかりません" },
        { status: 404 }
      );
    }

    // slug の重複チェック（自分自身は除く）
    if (categories.some((c) => c.slug === data.slug && c.id !== data.id)) {
      return NextResponse.json(
        { error: "このスラッグは既に使用されています" },
        { status: 400 }
      );
    }

    categories[index] = {
      ...categories[index],
      name: data.name,
      slug: data.slug,
    };

    await saveCategories(categories);

    return NextResponse.json({ category: categories[index] });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: "カテゴリの更新に失敗しました" },
      { status: 500 }
    );
  }
}

// カテゴリ削除
export async function DELETE(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "IDが指定されていません" },
        { status: 400 }
      );
    }

    const categories = await getCategories();
    const filteredCategories = categories.filter((c) => c.id !== id);

    if (filteredCategories.length === categories.length) {
      return NextResponse.json(
        { error: "カテゴリが見つかりません" },
        { status: 404 }
      );
    }

    await saveCategories(filteredCategories);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "カテゴリの削除に失敗しました" },
      { status: 500 }
    );
  }
}
