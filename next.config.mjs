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
            {
                hostname: "res.cloudinary.com",
                port: "",
                protocol: "https",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
