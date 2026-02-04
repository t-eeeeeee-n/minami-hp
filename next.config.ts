import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'minami-hp.s3.ap-northeast-1.amazonaws.com',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '9000',
                pathname: '/**',
            },
        ],
        qualities: [75, 90, 100],
    },
    // Turbopack設定（Next.js 16以降で必要）
    turbopack: {},
    // 開発環境用のwebpack設定
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
};

export default nextConfig;
