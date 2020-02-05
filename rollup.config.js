import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import {readdirSync} from 'fs';
import {basename, join} from 'path';

const inputFolder = './src';
const outputFolder = './dist';
const testFolder = '__tests__';

function buildConfig(input) {
  const cjs = join(outputFolder, basename(input, '.ts') + '.js');
  const es = join(outputFolder, basename(input, '.ts') + '.es.js');

  return {
    input: join(inputFolder, input),
    output: [
      {
        file: cjs,
        format: "cjs",
        exports: "named",
        sourcemap: true
      },
      {
        file: es,
        format: "es",
        exports: "named",
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: "**/__tests__/**",
        clean: true
      }),
      commonjs({
        include: ["node_modules/**"],
        namedExports: {
          "node_modules/react/react.js": [
            "Children",
            "Component",
            "PropTypes",
            "createElement"
          ],
          "node_modules/react-dom/index.js": ["render"]
        }
      })
    ]
  }
}

function ignoreTests(input) {
  return input !== testFolder;
}

export default readdirSync(inputFolder)
  .filter(ignoreTests)
  .map(buildConfig);
