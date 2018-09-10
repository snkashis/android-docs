import React from 'react';
import PropTypes from 'prop-types';
import PageShell from './page-shell';

class MarkdownPageshell extends React.Component {
  render() {
    return (
      <PageShell {...this.props}>
        <div id="docs-content" className="prose">
          {this.props.children}
        </div>
      </PageShell>
    );
  }
}

MarkdownPageshell.propTypes = {
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topic: PropTypes.oneOf([
      'Getting started',
      'Dynamic styling',
      'Data visualization',
      'Extrusions',
      'Add markers and infoWindows to the map',
      'User interaction',
      'Add features to a map',
      'Set a map style',
      'Image generation',
      'Offline'
    ]),
    headings: PropTypes.arrayOf(
      PropTypes.shape({
        level: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

export default MarkdownPageshell;
