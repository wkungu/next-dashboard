/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'next-dashboard-rho-nine.vercel.app',
                pathname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
