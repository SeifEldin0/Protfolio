/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	productionBrowserSourceMaps: false,
	images: {
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 31536000,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	experimental: {
		optimizePackageImports: ["@mui/material", "@mui/icons-material", "framer-motion", "gsap"],
	},
	headers: async () => {
		return [
			// Global Security Headers
			{
				source: "/:path*",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
			// Don't cache SEO-critical files so updates are seen immediately
			{
				source: "/(sitemap.xml|sitemap-0.xml|robots.txt)",
				headers: [
					{
						key: "Cache-Control",
						value: "no-cache, no-store, must-revalidate",
					},
				],
			},
			// Long cache for static assets only
			{
				source: "/:path*\.(js|css|woff2|woff|ttf|eot|png|jpg|jpeg|gif|svg|ico|webp|avif)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default nextConfig;
