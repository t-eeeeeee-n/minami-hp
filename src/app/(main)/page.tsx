import Client from "@/app/client";
import { getPublishedPosts } from "@/lib/s3";

// 動的レンダリングを強制（S3からリアルタイムで取得）
export const dynamic = "force-dynamic";

const Page = async () => {
    const { posts } = await getPublishedPosts(1, 10);

    return <Client recentPosts={posts} />;
};

export default Page;