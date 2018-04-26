import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  return <p> {props.text} </p>;
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
