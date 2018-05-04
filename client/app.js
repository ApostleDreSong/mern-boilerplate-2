import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './styles/main.scss';
import Masonry from './containers/Masonry';

const Card = styled.div.attrs({
  style: ({ height }) => ({
    height,
  }),
})`
  background-color: #FFF;
  height: ${p => p.heightAttr};
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 1px 2px 5px 0 rgba(52,40,22,.04), 0 1px 2px 0 rgba(53,40,22,.04);
  margin: 12px 6px;
`;

const range = Array.from({ length: 100 }, (x, i) => i);

const elements = range.map((val, idx) => {
  const height = Math.round(Math.random() * (420 - 380) + 380);
  const key = `card-${idx}`;
  return (
    <Card style={{ height }} key={key}>
      {val + 1}
    </Card>
  );
});

const Index = () => (
  <Masonry>
    {elements}
  </Masonry>
);

ReactDOM.render(<Index />, document.getElementById('index'));
