import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const breakPoints = {
  sm: 320,
  md: 800,
  lg: 1200,
};

const Container = styled.div`
  background-color: #fff;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  box-shadow: 1px 2px 5px 0 rgba(52, 40, 22, 0.04), 0 1px 2px 0 rgba(53, 40, 22, 0.04);
  margin-bottom: 12px;
  @media screen and (min-width: ${breakPoints.md}px) {
    margin: 12px 6px;
    border-radius: 3px;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 250px;
  padding: 20px 20px 16px 20px;
`;

const Headline = styled.h2`
  font-family: 'Arvo', serif;
  font-size: 33px;
  margin: 0 0 23px;
`;

const Body = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  margin: 0px;
`;

const ButtonPanel = styled.div`
  display: flex;
  padding: 16px 20px;
`;

const Button = styled.a`
  padding: 7px 30px;
  border: 2px solid;
  border-color: ${props => props.background || '#424242'};
  font-size: 16px;
  color: ${props => props.color || '#424242'};
  border-radius: 3px;
  &:hover {
    color: ${props => props.colorHover || '#686868'};
    border-color: ${props => props.borderColorHover || '#686868'};
    box-shadow: 0px 0px 3px rgba(0,0,0,0.1);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;


/*
const ImageHeader = styled.div`
background-image: url(${props => props.imageURL || 'https://visualhunt.com/photos/s/1/sunset-in-mountains.jpg'});
height: 200px;
background-size: cover;
background-repeat: no-repeat;
background-position: 50%;
`;
*/

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function Card(props) {
  return (
    <Container>
      {props.imageURL !== null && <Image src={props.imageURL} />}
      <Frame>
        <Headline> {props.headline} </Headline>
        <Body>{props.body}</Body>
      </Frame>
      <ButtonPanel>
        <Button href="./"> View </Button>
      </ButtonPanel>
    </Container>
  );
}

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

Card.defaultProps = {
  imageURL: null,
};

export default Card;
