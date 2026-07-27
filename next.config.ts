import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Local images from /public — no remote hosts needed */
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
