import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js", // Main entry file
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Module
    },
  ],
  external: ["react", "react-dom"], // Prevents bundling React
  plugins: [
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS modules to ES6
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"], // Supports JSX
    }),
  ],
};
