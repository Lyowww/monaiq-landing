import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Monorepo: lockfile in parent can confuse file tracing; keep deploy self-contained
  outputFileTracingRoot: path.join(projectRoot, ".."),
};

export default nextConfig;
