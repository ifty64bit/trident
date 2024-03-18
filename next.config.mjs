/** @type {import('next').NextConfig} */
//https://images.pexels.com/photos/
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.pexels.com",
                port: "",
                protocol: "https",
                pathname: "/photos/**",
            },
        ],
    },
};

export default nextConfig;
