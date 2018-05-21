import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Navbar from './index';

describe('<Navbar />', () => {
  it('renders 2 <Container /> styled components', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('Container')).to.have.length(2);
  });

  it('renders the styled component <Logo />', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('Logo')).to.have.length(1);
  });

  it('renders the styled component <TabBlock />', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('TabBlock')).to.have.length(1);
  });

  it('renders the styled component <TabLinks />', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('TabLinks')).to.have.length(1);
  });
});
