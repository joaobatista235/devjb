import path from "node:path";
import type { NextConfig } from "next";

const config: NextConfig = {
  sassOptions: { includePaths: [path.join(process.cwd(), "src/styles")] },
};

export default config;
