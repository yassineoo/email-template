// Import SVGR webpack package
import { createRequire } from "module";
const require = createRequire(import.meta.url); // Enable CommonJS imports in ESM files

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: {
            icon: true, // Optional: Enables icon mode for better size handling
          },
        },
      ],
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
