import React from 'react';
import PropTypes from 'prop-types';
import BookImage from '@mapbox/dr-ui/book-image';
import Note from '@mapbox/dr-ui/note';

class DocNote extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="mt12 mb18">
        <Note imageComponent={<BookImage width="60" height="60" />}>
          {props.children}
        </Note>
      </div>
    );
  }
}

DocNote.propTypes = {
  children: PropTypes.node.isRequired
};

export { DocNote };
