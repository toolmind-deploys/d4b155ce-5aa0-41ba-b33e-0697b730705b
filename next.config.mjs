/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*', // or only the routes you actually iframe
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' http://localhost:3000",
          },
        ],
      },
    ]
  },
}

export default nextConfig
