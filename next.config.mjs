/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // doubleclick/googleadservices: a tag de conversão do Ads CARREGA scripts desses hosts
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://www.google-analytics.com https://*.g.doubleclick.net https://www.googleadservices.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "media-src 'self' blob: https:",
      // Google Ads (tag AW no GTM) envia conversões pra google.com/ccm e doubleclick —
      // sem esses domínios o CSP bloqueia e o Ads perde os dados
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://ad.doubleclick.net https://www.google.com https://*.google.com.br https://www.googleadservices.com https://*.supabase.co",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://td.doubleclick.net https://www.googletagmanager.com",
      "frame-ancestors 'self'",
    ].join('; ')
  },
]

const nextConfig = {
  transpilePackages: ["lenis"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
};

export default nextConfig;
