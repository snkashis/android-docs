import Prism from 'prismjs';
import 'prismjs/components/prism-java';

function highlightCodeSnippet(rawCode) {
  return Prism.highlight(rawCode, Prism.languages['java']);
}

export { highlightCodeSnippet };
