import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.watchOptions = {
            poll: 1000, // 1秒ごとにポーリング
            aggregateTimeout: 300, // 300ms待機してから再ビルド
        };
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'minami-hp.s3.ap-northeast-1.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
