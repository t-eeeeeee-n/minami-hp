import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import {
  getBlogPosts,
  saveBlogPost,
  deleteBlogPost,
  getBlogPostBySlugAdmin,
  BlogPost,
} from "@/lib/s3";
import { v4 as uuidv4 } from "uuid";

// 認証チェック
async function checkAuth() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
  }
  return null;
}

// 記事一覧取得
export async function GET() {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const posts = await getBlogPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "記事の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// 記事作成
export async function POST(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const data = await request.json();

    // slug の重複チェック
    const existingPost = await getBlogPostBySlugAdmin(data.slug);
    if (existingPost) {
      return NextResponse.json(
        { error: "このスラッグは既に使用されています" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const post: BlogPost = {
      id: uuidv4(),
      title: data.title,
      slug: data.slug,
      content: data.content,
      excerpt: data.excerpt,
      eyecatch: data.eyecatch || undefined,
      categoryId: data.categoryId,
      tags: data.tags || [],
      status: data.status || "draft",
      publishedAt: data.status === "published" ? now : undefined,
      createdAt: now,
      updatedAt: now,
    };

    await saveBlogPost(post);

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "記事の作成に失敗しました" },
      { status: 500 }
    );
  }
}

// 記事更新
export async function PUT(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const data = await request.json();
    const { originalSlug, ...postData } = data;

    // 既存記事取得
    const existingPost = await getBlogPostBySlugAdmin(originalSlug);
    if (!existingPost) {
      return NextResponse.json(
        { error: "記事が見つかりません" },
        { status: 404 }
      );
    }

    // slug が変更された場合、重複チェック
    if (postData.slug !== originalSlug) {
      const duplicatePost = await getBlogPostBySlugAdmin(postData.slug);
      if (duplicatePost) {
        return NextResponse.json(
          { error: "このスラッグは既に使用されています" },
          { status: 400 }
        );
      }
    }

    const now = new Date().toISOString();
    const updatedPost: BlogPost = {
      ...existingPost,
      title: postData.title,
      slug: postData.slug,
      content: postData.content,
      excerpt: postData.excerpt,
      eyecatch: postData.eyecatch || undefined,
      categoryId: postData.categoryId,
      tags: postData.tags || [],
      status: postData.status,
      publishedAt:
        postData.status === "published" && !existingPost.publishedAt
          ? now
          : existingPost.publishedAt,
      updatedAt: now,
    };

    // slug が変更された場合、古いファイルを削除
    if (postData.slug !== originalSlug) {
      await deleteBlogPost(originalSlug);
    }

    await saveBlogPost(updatedPost);

    return NextResponse.json({ post: updatedPost });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "記事の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// 記事削除
export async function DELETE(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "スラッグが指定されていません" },
        { status: 400 }
      );
    }

    await deleteBlogPost(slug);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "記事の削除に失敗しました" },
      { status: 500 }
    );
  }
}
