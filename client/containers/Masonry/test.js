import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Masonry from './index';
import Billboard from '../../components/Billboard';


const dummyProps = {
  headline: 'headline',
  description: 'description',
  buttonText: 'button text',
  buttonLink: './',
};


describe('<Masonary />', () => {
  it('renders the styled component <MasonryContainer />', () => {
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />  
    </Masonry>);
    expect(wrapper.find('MasonryContainer')).to.have.length(1);
  });
  it('when window.width >= 1200px and # children >= 3; renders 3 <MasonryColumn /> and places children in correct columns', () => {
    window.resizeTo(1920, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      /> 
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(3);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(2);
    expect(wrapper.find('MasonryColumn').at(1).find('Billboard')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(2).find('Billboard')).to.have.length(1);
  });
  it('when window.width between 800-1200px and # children >= 3; renders 2 <MasonryColumn /> places children in correct columns', () => {
    window.resizeTo(820, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      /> 
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(2);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(2);
    expect(wrapper.find('MasonryColumn').at(1).find('Billboard')).to.have.length(2);
  });
  it('when window.width < 800px and # children >= 3; renders 1 <MasonryColumn /> places children in correct columns', () => {
    window.resizeTo(720, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      /> 
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(4);
  });
  it('when window.width >= 1200px and # children == 2; renders 2 <MasonryColumn /> and places children in correct columns', () => {
    window.resizeTo(1920, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(2);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(1).find('Billboard')).to.have.length(1);
  });
  it('when window.width between 800px-1200px and # children == 2; renders 2 <MasonryColumn /> and places children in correct columns', () => {
    window.resizeTo(820, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(2);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(1).find('Billboard')).to.have.length(1);
  });
  it('when window.width < 800px and # children == 2; renders 1 <MasonryColumn /> and places children in this column', () => {
    window.resizeTo(720, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(2);
  });
  it('when window.width >= 1200px and # children == 1; renders 1 <MasonryColumn /> and places children in this column', () => {
    window.resizeTo(1920, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(1);

  });
  it('when window.width between 800px-1200px and # children == 1; renders 1 <MasonryColumn /> and places children in this column', () => {
    window.resizeTo(820, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(1);
  });
  it('when window.width between < 800px and # children == 1; renders 1 <MasonryColumn /> and places children in this column', () => {
    window.resizeTo(720, 1080);
    const wrapper = mount(<Masonry>
      <Billboard
        headline={dummyProps.headline}
        description={dummyProps.description}
        buttonText={dummyProps.buttonText}
        buttonLink={dummyProps.buttonLink}
      />
    </Masonry>);
    expect(wrapper.find('MasonryColumn')).to.have.length(1);
    expect(wrapper.find('MasonryColumn').at(0).find('Billboard')).to.have.length(1);
  });
});
