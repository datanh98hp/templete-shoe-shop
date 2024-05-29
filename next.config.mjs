/** @type {import('next').NextConfig} */
const nextConfig = {
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
            }
        ],
    },
};

export default nextConfig;
