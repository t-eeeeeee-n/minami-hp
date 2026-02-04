import {Redis} from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// いいね数を取得
export async function getLikeCount(slug: string): Promise<number> {
  const count = await redis.get<number>(`likes:${slug}`);
  return count || 0;
}

// いいねを追加
export async function addLike(slug: string): Promise<number> {
  return await redis.incr(`likes:${slug}`);
}

// いいねを削除
export async function removeLike(slug: string): Promise<number> {
  const count = await redis.decr(`likes:${slug}`);
  // 0未満にならないようにする
  if (count < 0) {
    await redis.set(`likes:${slug}`, 0);
    return 0;
  }
  return count;
}

// 複数記事のいいね数を一括取得
export async function getLikeCounts(
  slugs: string[]
): Promise<Record<string, number>> {
  if (slugs.length === 0) return {};

  const keys = slugs.map((slug) => `likes:${slug}`);
  const counts = await redis.mget<(number | null)[]>(...keys);

  return slugs.reduce(
    (acc, slug, index) => {
      acc[slug] = counts[index] || 0;
      return acc;
    },
    {} as Record<string, number>
  );
}
