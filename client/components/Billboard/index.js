import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const breakPoints = {
  sm: 320,
  md: 800,
  lg: 1200,
};

const Container = styled.div`
  background: linear-gradient(
    30deg,
    ${props => props.bgGradStart || '#bdc3c7'} 0,
    ${props => props.bgGradEnd || '#2c3e50'} 100%
  );
  color: ${props => props.color || 'inherit'};
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 1px 2px 5px 0 rgba(52, 40, 22, 0.04), 0 1px 2px 0 rgba(53, 40, 22, 0.04);
  padding: 20px;
  margin-bottom: 12px;
  @media screen and (min-width: ${breakPoints.md}px) {
    /*margin: 12px 6px;*/
    border-radius: 3px;
  }
`;

Container.displayName = 'Container';

const Headline = styled.h2`
  font-family: 'Arvo', serif;
  font-size: 33px;
  margin: 0 0 23px;
`;

Headline.displayName = 'Headline';

const Body = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  margin: 0px 0px 20px 0px;
`;

Body.displayName = 'Body';

const Button = styled.a`
  padding: 10px 30px;
  background-color: rgba(20, 20, 20, 0.4);
  font-size: 16px;
  color: ${props => props.color || '#FFF'};
  border-radius: 3px;
  width: 50%;
  &:hover {
    background-color: rgba(20, 20, 20, 0.3);
  }
`;

Button.displayName = 'Button';

function Billboard(props) {
  return (
    <Container bgGradStart={props.bgGradStart} bgGradEnd={props.bgGradEnd} color={props.color}>
      <Headline> {props.headline} </Headline>
      <Body>{props.description}</Body>
      <Button href={props.buttonLink}> {props.buttonText} </Button>
    </Container>
  );
}

Billboard.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  bgGradStart: PropTypes.string,
  bgGradEnd: PropTypes.string,
  color: PropTypes.string,
};

Billboard.defaultProps = {
  bgGradStart: '#bdc3c7',
  bgGradEnd: '#2c3e50',
  color: '#fff',
};

export default Billboard;
