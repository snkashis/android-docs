import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import Note from '@mapbox/dr-ui/note';

class WarningNote extends React.Component {
  render() {
    const { props } = this;
    const warningIcon = (
      <div
        style={{ height: 42, width: 42, borderRadius: '50%' }}
        className="bg-orange-light px3 mr12"
      >
        <span className="mx-auto color-orange">
          <Icon name="alert" themeIcon="w36 h36" />
        </span>
      </div>
    );
    let noteTitle = 'Warning';
    if (props.title) noteTitle = props.title;
    return (
      <div className="mt12 mb18">
        <Note
          title={noteTitle}
          imageComponent={warningIcon}
          theme={{
            background: '#FFDCBC',
            padding: '18px 18px 18px',
            fontSize: '13px',
            lineHeight: '20px',
            color: 'black'
          }}
        >
          {props.children}
        </Note>
      </div>
    );
  }
}

WarningNote.propTypes = {
  children: PropTypes.node.isRequired
};

export { WarningNote };
