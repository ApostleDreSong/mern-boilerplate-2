import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Card from './index';

const dummyProps = {
  type: 'card',
  headline: 'It is very important to embrace failure and to do a lot of stuff.',
  body:
    'As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.',
  image: 'https://visualhunt.com/photos/1/camera.jpg?s=s',
};

describe('<Card />', () => {
  it('renders the styled component <Container />', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper.find('Container')).to.have.length(1);
  });

  it('if props.imageURL == null <Container /> contains 2 components <Frame /> and <ButtonPanel />', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
    />);
    expect(wrapper.find('Container').children()).to.have.length(2);
    expect(wrapper
      .find('Container')
      .childAt(0)
      .name()).to.equal('Frame');
    expect(wrapper
      .find('Container')
      .childAt(1)
      .name()).to.equal('ButtonPanel');
  });

  it('if recieved props.imageURL <Container /> contains 3 components <Image />, <Frame /> and <ButtonPanel />', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper.find('Container').children()).to.have.length(3);
    expect(wrapper
      .find('Container')
      .childAt(0)
      .name()).to.equal('Image');
    expect(wrapper
      .find('Container')
      .childAt(1)
      .name()).to.equal('Frame');
    expect(wrapper
      .find('Container')
      .childAt(2)
      .name()).to.equal('ButtonPanel');
  });

  it('if recieved props.imageURL <Image /> has the correct src', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper.find('Image')).to.have.length(1);
    expect(wrapper.find('Image').html()).to.contain(`src="${dummyProps.image}"`);
  });

  it('renders the styled component <Frame />', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper.find('Frame')).to.have.length(1);
  });

  it('<Frame /> contains 2 components <Headline /> and <Body />', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper.find('Frame').children()).to.have.length(2);
    expect(wrapper
      .find('Frame')
      .childAt(0)
      .name()).to.equal('Headline');
    expect(wrapper
      .find('Frame')
      .childAt(1)
      .name()).to.equal('Body');
  });

  it('<Headline /> displays the headline prop', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper
      .find('Headline')
      .dive()
      .text()).to.contain(dummyProps.headline);
  });

  it('<Body /> displays the description prop', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper
      .find('Body')
      .dive()
      .text()).to.contain(dummyProps.body);
  });

  it('renders the styled component <ButtonPanel />', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper.find('ButtonPanel')).to.have.length(1);
  });

  it('<ButtonPanel /> contains <Button />', () => {
    const wrapper = shallow(<Card
      headline={dummyProps.headline}
      body={dummyProps.body}
      imageURL={dummyProps.image}
    />);
    expect(wrapper
      .find('ButtonPanel')
      .childAt(0)
      .name()).to.equal('Button');
  });
});
