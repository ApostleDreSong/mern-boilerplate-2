import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Billboard from './index';

const dummyProps = {
  headline: 'headline',
  description: 'description',
  buttonText: 'button text',
  buttonLink: './',
  bgGradStart: 'red',
  bgGradEnd: 'blue',
  color: 'green',
};


describe('<Billboard />', () => {
  it('renders the styled component <Container />', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Container')).to.have.length(1);
  });

  it('<Container /> accepts optional props { bgGradStart, bgGradEnd, color }', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
      bgGradStart={dummyProps.bgGradStart}
      bgGradEnd={dummyProps.bgGradEnd}
      color={dummyProps.color}
    />);
    expect(wrapper.props().bgGradStart).to.equal(dummyProps.bgGradStart);
    expect(wrapper.props().bgGradEnd).to.equal(dummyProps.bgGradEnd);
    expect(wrapper.props().color).to.equal(dummyProps.color);
  });

  it('<Container /> has 3 childern', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Container').children()).to.have.length(3);
  });

  it('<Container /> first child is <Headline />', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Container').childAt(0).name()).to.equal('Headline');
  });

  it('<Headline /> displays the headline prop', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Headline').dive().text()).to.contain(dummyProps.headline);
  });

  it('<Container /> second child is <Body />', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Container').childAt(1).name()).to.equal('Body');
  });

  it('<Body /> displays the description prop', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Body').dive().text()).to.contain(dummyProps.description);
  });

  it('<Container /> third child is <Button />', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Container').childAt(2).name()).to.equal('Button');
  });

  it('<Button /> displays the buttonText prop', () => {
    const wrapper = shallow(<Billboard
      headline={dummyProps.headline}
      description={dummyProps.description}
      buttonText={dummyProps.buttonText}
      buttonLink={dummyProps.buttonLink}
    />);
    expect(wrapper.find('Button').dive().text()).to.contain(dummyProps.buttonText);
  });
});
