// 1. Copy and paste this code into a new file in `src/example-code/`
// 2. Update the filepath in line 8 to point to the file for your example.
// 3. Find and replace all instances of `NameOfExample` with the name of the example.

import { highlightCodeSnippet } from '../util/highlight-code-snippet';

function MakeCodeSnippetJava() {
  const rawJavaCode = require('raw-loader!./YOUR_FILE_PATH');
  return {
    raw: rawJavaCode,
    highlighted: highlightCodeSnippet(rawJavaCode)
  };
}

function MakeCodeSnippetKotlin() {
  const rawKotlinCode = '// Not available';
  return {
    raw: rawKotlinCode,
    highlighted: highlightCodeSnippet(rawKotlinCode)
  };
}

const NameOfExample = {
  java: MakeCodeSnippetJava(),
  kotlin: MakeCodeSnippetKotlin()
};

export { NameOfExample };
