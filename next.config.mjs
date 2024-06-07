/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        BASE_API_URI: process.env.BASE_API_URI
    },
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "swiperjs.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "stcd02206177151.cloud.edgevnpay.vn",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                pathname: "/**",
            }
        ],
    },
};

export default nextConfig;
