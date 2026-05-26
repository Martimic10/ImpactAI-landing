import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(projectRoot, "package.json"));

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    [require.resolve("@tailwindcss/postcss")]: {},
  },
};

export default config;
