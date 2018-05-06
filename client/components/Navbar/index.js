import React from 'react';
import styled from 'styled-components';

const breakPoints = {
  sm: 320,
  md: 800,
  lg: 1200,
};

const Header = styled.header`
  background-color: white;
  height: 110px;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  font-family: 'Montserrat', sans-serif;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  margin: 0 auto;
  height: ${props => props.height || '100%'};
  @media screen and (min-width: ${breakPoints.sm}px) {
    width: 100%;
  }

  @media screen and (min-width: ${breakPoints.md}px) {
    max-width: 788px;
  }

  @media screen and (min-width: ${breakPoints.lg}px) {
    max-width: 1088px;
  }
`;


const Logo = styled.a`
  align-self: flex-start;
  height: 50px;
`;

const TabBlock = styled.div`
  height: 50px;
  border-top: 1px solid #DEDEDE;
`;

const TabLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  align-self: flex-start;
  > li {
    float: none;
    margin-right: 20px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const Tab = styled.div`
  padding: 0 16px;
  line-height: 46px;
  text-transform: uppercase;
  color: ${props => (props.active ? '#7C65F8' : 'inherit')};
  font-weight: ${props => (props.active ? 500 : 400)};
  border-bottom: ${props => (props.active ? '3px solid #7C65F8' : '3px solid transparent')};
  min-width: inherit;
`;

function Navbar() {
  return (
    <Header>
      <Container height="60px">
        <Logo href="./">
          <img src="http://via.placeholder.com/100x50" alt="logo" width="100" />
        </Logo>
      </Container>
      <TabBlock>
        <Container>
          <TabLinks>
            <li>
              <a href="./">
                <Tab active>Link </Tab>
              </a>
            </li>
            <li>
              <a href="./">
                <Tab>Link </Tab>
              </a>
            </li>
            <li>
              <a href="./">
                <Tab>Link </Tab>
              </a>
            </li>
          </TabLinks>
        </Container>
      </TabBlock>
    </Header>
  );
}

export default Navbar;
