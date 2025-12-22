import path from "path";
import { readFileSync, writeFileSync } from "fs";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: path.resolve("dist/index.cjs"),
      format: "cjs",
      exports: "named",
    },
    {
      file: path.resolve("dist/index.js"),
      format: "esm",
      exports: "named",
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    commonjs(),
    postcss({
      extract: path.resolve("dist/index.css"),
      minimize: false,
      inject: false,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist",
      rootDir: "./src",
      exclude: ["**/*.test.ts", "**/*.test.tsx", "**/__tests__/**"],
      compilerOptions: {
        noEmit: false,
        moduleResolution: "node",
        allowImportingTsExtensions: false,
      },
    }),
    json(),
    // Post-build plugin to inject CSS import
    {
      name: 'inject-css-import',
      writeBundle() {
        // Inject CSS import into ESM build
        const esmPath = path.resolve("dist/index.js");
        let esmContent = readFileSync(esmPath, 'utf-8');
        if (!esmContent.includes("import './index.css'")) {
          esmContent = "import './index.css';\n" + esmContent;
          writeFileSync(esmPath, esmContent);
        }
      },
    },
  ],
};
