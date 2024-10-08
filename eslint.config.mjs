import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import { includeIgnoreFile } from "@eslint/compat";

const __dirname = dirname(fileURLToPath(import.meta.url));
const gitIngorePath = path.resolve(__dirname, '.gitignore');

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'node_modules'
    ]
  },
  includeIgnoreFile(gitIngorePath)
];
