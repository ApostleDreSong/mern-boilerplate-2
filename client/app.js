import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Message from './components/Message';

const Index = () => <div className="test"><Message text="Hello React!" /></div>;

ReactDOM.render(<Index />, document.getElementById('index'));
