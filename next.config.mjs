/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	images: {
		formats: ["image/avif", "image/webp"],
	},
	experimental: {
		optimizePackageImports: ["@mui/material", "@mui/icons-material", "framer-motion"],
	},
};

export default nextConfig;
