import { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
