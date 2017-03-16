import React from 'react';
import Section from './section';
import PureRenderMixin from 'react-pure-render/mixin';
import GithubSlugger from 'github-slugger';

let slugger = new GithubSlugger();
let slug = title => { slugger.reset(); return slugger.slug(title); };

var roundedToggleOptionType = React.PropTypes.shape({
  title: React.PropTypes.string,
  value: React.PropTypes.string
});

function chunkifyAST(ast) {
  var preview = false;
  return ast.children.reduce((chunks, node) => {
    if (node.type === 'heading' && node.depth === 1) {
      return chunks;
    } else if (node.type === 'heading' && node.depth < 4) {
      chunks.push([node]);
    } else {
      chunks[chunks.length - 1].push(node);
    }
    return chunks;
  }, [[]]).filter(chunk => chunk.length)
  .map(chunk => {
    var left = [], right = [], title;
    if (chunk[0].depth < 3) {
      preview = false;
    }
    chunk.forEach(node => {
      if (node.type === 'code') {
          right.push(node);

      } else if (node.type === 'heading' && node.depth >= 4) {
        right.push(node);
      } else if (node.type === 'blockquote') {
        right.push(node);
      } else if (node.type === 'heading' && node.depth < 4 && !title) {
        title = node.children[0].value;
        left.push(node);
      } else if (node.type === 'html') {
        if (node.value.indexOf('<!--') === 0) {
          var content = node.value
            .replace(/^<!--/, '')
            .replace(/-->$/, '')
            .trim();
          if (content === 'preview') {
            preview = true;
          }
        }
      } else {
        left.push(node);
      }
    });
    return { left, right, title, preview, slug: slug(title) };
  });
}

var Content = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    ast: React.PropTypes.object.isRequired,
    leftClassname: React.PropTypes.string.isRequired,
    rightClassname: React.PropTypes.string.isRequired
  },
  render() {
    let { ast, leftClassname, rightClassname } = this.props;
    return (<div className='clearfix'>
      {chunkifyAST(ast).map((chunk, i) => <Section
        leftClassname={leftClassname}
        rightClassname={rightClassname}
        chunk={chunk}
        key={i} />)}
    </div>);
  }
});

module.exports = Content;
