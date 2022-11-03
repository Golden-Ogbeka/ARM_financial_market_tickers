/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		API_Token: 'XjyuJFCOEZiSe5veAs84qns8h4x6Mgi6vBUDhrKu',
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
