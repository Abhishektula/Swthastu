import type { NextConfig } from 'next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
if (process.env.NODE_ENV === 'development') initOpenNextCloudflareForDev();
const nextConfig: NextConfig = { output: 'standalone', allowedDevOrigins: ['terminal.local'], poweredByHeader: false, images: { unoptimized: true } };
export default nextConfig;
