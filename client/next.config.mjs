/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's-3-inventorymanagement.s3.amazonaws.com',
                port: "",
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
