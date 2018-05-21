import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';
import './styles/main.scss';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Billboard from './components/Billboard';
import Masonry from './containers/Masonry';

/*
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
  const height = Math.round((Math.random() * (420 - 380)) + 380);
  const key = `card-${idx}`;
  return (
    <Card style={{ height }} key={key}>
      {val + 1}
    </Card>
  );
});
*/

const dummyData = [
  {
    type: 'card',
    headline: 'I think the fun of being a graphic designer is to do something original',
    body: 'to make images that nobody’s ever seen before. And the only way you’re going to do that is to avoid what the culture tells you is good. There is no good. The good comes from what does the job. Once it might be a sunset, which is beautiful, and another might be a dog turd, which is disgusting. But it may be the perfect image for what you’re trying to communicate.',
    image: 'https://visualhunt.com/photos/1/black-and-white-image-of-mobile-phone-and-notebook.jpg?s=s',
  },
  {
    type: 'billboard',
    headline: 'More content awaits you',
    description: 'We have all this really really cool stuff you are just dying to see.',
    buttonText: 'Join today',
    buttonLink: './',
    color: '#FFF',
    bgGradStart: '#bdc3c7',
    bgGradEnd: '#2c3e50',
  },
  {
    type: 'card',
    headline: 'Ask why. Ask why until it becomes painful',
    body: 'until you’re sick of the word. And give it character — there’s enough ‘nice’ design in the world. Whether sublime, exuberant, minimal or maximal, give your work personality. Don’t be afraid to be awkward — what feels comfortable today, will be boring tomorrow.',
    image: 'https://visualhunt.com/photos/1/mist-clouds-architecture.jpg?s=s',
  },
  {
    type: 'card',
    headline: 'The simpler the idea the better',
    body: 'It could break ground and it could defy physics but as long as the idea is super simple enough that I can tell my Mum, then that’s a great idea.',
    image: 'https://visualhunt.com/photos/1/mug-black-and-white-black-amp-white.jpg?s=s',
  },
  {
    type: 'card',
    headline: 'Failure is built into creativity… ',
    body:
      'the creative act involves this element of ‘newness’ and ‘experimentalism’, then one must expect and accept the possibility of failure.',
    image: 'https://visualhunt.com/photos/1/black-and-white-mountains.jpg?s=s',
  },
  {
    type: 'card',
    headline: 'I think it’s very important to have a feedback loop',
    body: 'where you’re constantly thinking about what you’ve done and how you could be doing it better. I think that’s the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.',
    image: 'https://visualhunt.com/photos/1/black-and-white-image-of-guitar.jpg?s=s',
  },
  {
    type: 'card',
    headline: 'Creativity is just connecting things.',
    body: 'When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while. That’s because they were able to connect experiences they’ve had and synthesize new things.',
    image: 'https://visualhunt.com/photos/1/black-cat-relaxing-on-window-sill.jpg?s=s',
  },
  {
    type: 'card',
    headline: 'It is very important to embrace failure and to do a lot of stuff.',
    body: 'As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.',
    image: 'https://visualhunt.com/photos/1/camera.jpg?s=s',
  },
];

const cards = dummyData.map((d) => {
  if (d.type === 'card') {
    return <Card headline={d.headline} body={d.body} imageURL={d.image} />;
  }
  return (
    <Billboard
      headline={d.headline}
      description={d.description}
      buttonText={d.buttonText}
      buttonLink={d.buttonLink}
      bgGradStart={d.bgGradStart}
      bgGradEnd={d.bgGradEnd}
      color={d.color}
    />
  );
});

const Index = () => (
  <div>
    <Navbar />
    <section style={{ marginTop: '120px' }}>
      <Masonry>{cards}</Masonry>
    </section>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
