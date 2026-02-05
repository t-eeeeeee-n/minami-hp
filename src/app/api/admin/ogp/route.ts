import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

interface OGPData {
  url: string;
  title: string;
  description: string;
  image: string | null;
  siteName: string | null;
  favicon: string | null;
}

function extractMetaContent(html: string, property: string): string | null {
  // OGP meta tags
  const ogRegex = new RegExp(
    `<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']+)["'][^>]*>`,
    "i"
  );
  const ogMatch = html.match(ogRegex);
  if (ogMatch) return ogMatch[1];

  // Alternative format (content before property)
  const altRegex = new RegExp(
    `<meta[^>]*content=["']([^"']+)["'][^>]*property=["']${property}["'][^>]*>`,
    "i"
  );
  const altMatch = html.match(altRegex);
  if (altMatch) return altMatch[1];

  return null;
}

function extractMetaName(html: string, name: string): string | null {
  const nameRegex = new RegExp(
    `<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["'][^>]*>`,
    "i"
  );
  const nameMatch = html.match(nameRegex);
  if (nameMatch) return nameMatch[1];

  const altRegex = new RegExp(
    `<meta[^>]*content=["']([^"']+)["'][^>]*name=["']${name}["'][^>]*>`,
    "i"
  );
  const altMatch = html.match(altRegex);
  if (altMatch) return altMatch[1];

  return null;
}

function extractTitle(html: string): string {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : "";
}

function extractFavicon(html: string, baseUrl: string): string | null {
  // Look for various favicon link tags
  const faviconPatterns = [
    /<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["']([^"']+)["'][^>]*>/i,
    /<link[^>]*href=["']([^"']+)["'][^>]*rel=["'](?:shortcut )?icon["'][^>]*>/i,
    /<link[^>]*rel=["']apple-touch-icon["'][^>]*href=["']([^"']+)["'][^>]*>/i,
  ];

  for (const pattern of faviconPatterns) {
    const match = html.match(pattern);
    if (match) {
      const faviconUrl = match[1];
      if (faviconUrl.startsWith("http")) {
        return faviconUrl;
      }
      if (faviconUrl.startsWith("//")) {
        return `https:${faviconUrl}`;
      }
      if (faviconUrl.startsWith("/")) {
        return `${baseUrl}${faviconUrl}`;
      }
      return `${baseUrl}/${faviconUrl}`;
    }
  }

  // Default to /favicon.ico
  return `${baseUrl}/favicon.ico`;
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
  }

  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "URLが必要です" },
        { status: 400 }
      );
    }

    // Validate URL
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json(
        { error: "無効なURLです" },
        { status: 400 }
      );
    }

    const baseUrl = `${parsedUrl.protocol}//${parsedUrl.host}`;

    // Fetch the URL
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; OGPFetcher/1.0)",
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "URLの取得に失敗しました" },
        { status: 400 }
      );
    }

    const html = await response.text();

    // Extract OGP data
    const ogpData: OGPData = {
      url: url,
      title:
        extractMetaContent(html, "og:title") ||
        extractMetaName(html, "title") ||
        extractTitle(html) ||
        url,
      description:
        extractMetaContent(html, "og:description") ||
        extractMetaName(html, "description") ||
        "",
      image: extractMetaContent(html, "og:image"),
      siteName: extractMetaContent(html, "og:site_name"),
      favicon: extractFavicon(html, baseUrl),
    };

    // Resolve relative image URLs
    if (ogpData.image && !ogpData.image.startsWith("http")) {
      if (ogpData.image.startsWith("//")) {
        ogpData.image = `https:${ogpData.image}`;
      } else if (ogpData.image.startsWith("/")) {
        ogpData.image = `${baseUrl}${ogpData.image}`;
      } else {
        ogpData.image = `${baseUrl}/${ogpData.image}`;
      }
    }

    return NextResponse.json(ogpData);
  } catch (error) {
    console.error("Error fetching page info:", error);
    return NextResponse.json(
      { error: "ページ情報の取得に失敗しました" },
      { status: 500 }
    );
  }
}
