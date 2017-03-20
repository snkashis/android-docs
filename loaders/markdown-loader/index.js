import frontMatter from 'front-matter'
import markdownIt from 'markdown-it';
import markdownItSub from 'markdown-it-sub';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItDeflist from 'markdown-it-deflist';
import markdownItAbbr from 'markdown-it-abbr';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItDecorate from 'markdown-it-decorate';

import hljs from 'highlight.js';
import objectAssign from 'object-assign';

const highlight = (str, lang) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return '<pre class="hljs"><code>' +
             hljs.highlight(lang, str, true).value +
             '</code></pre>';
    } catch (__) {}
  }

  return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
}

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight
}).use(markdownItSub)
  .use(markdownItFootnote)
  .use(markdownItDeflist)
  .use(markdownItAbbr)
  .use(markdownItAttrs)
  .use(markdownItDecorate)
  .use(require('markdown-it-anchor'), {
    "level": "1",
    "permalinkClass": "anchor",
    "permalink": false
  });

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body, {
    tocCallback: function(tocMarkdown, tocArray, tocHtml) {
      console.log(tocHtml)

    }
  })
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
