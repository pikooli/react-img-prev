import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
      commonjs(),
      peerDepsExternal(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
