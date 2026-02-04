import { NextRequest, NextResponse } from "next/server";
import { getLikeCount, addLike, removeLike } from "@/lib/redis";

// いいね数を取得
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "スラッグが指定されていません" },
      { status: 400 }
    );
  }

  try {
    const count = await getLikeCount(slug);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error getting like count:", error);
    return NextResponse.json(
      { error: "いいね数の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// いいねを追加
export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: "スラッグが指定されていません" },
        { status: 400 }
      );
    }

    const count = await addLike(slug);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error adding like:", error);
    return NextResponse.json(
      { error: "いいねの追加に失敗しました" },
      { status: 500 }
    );
  }
}

// いいねを削除
export async function DELETE(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: "スラッグが指定されていません" },
        { status: 400 }
      );
    }

    const count = await removeLike(slug);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error removing like:", error);
    return NextResponse.json(
      { error: "いいねの削除に失敗しました" },
      { status: 500 }
    );
  }
}
