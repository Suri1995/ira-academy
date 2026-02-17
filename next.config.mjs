/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // ⭐ VERY IMPORTANT (creates /out folder)

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig