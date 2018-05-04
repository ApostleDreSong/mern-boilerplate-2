import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';


function Card(props) {
  return <div className="card"> {props.text} </div>;
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
