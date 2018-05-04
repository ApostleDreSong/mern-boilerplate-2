import React from 'react';
import styled from 'styled-components';


const breakPoints = {
  sm: 320,
  md: 820,
  lg: 1310,
};

const MasonryContainer = styled.div`
  display: flex;
  margin: 0 auto;
  @media screen and (min-width: ${breakPoints.sm}px) {
    width: 100%;
  }

  @media screen and (min-width: ${breakPoints.md}px) {
    width: 800px;
  }

  @media screen and (min-width: ${breakPoints.lg}px) {
    width: 1300px;
  }
`;


const MasonryColumn = styled.div`
  flex: 1;
`;

class Masonry extends React.Component {
  constructor(props) {
    super(props);

    this.updateWindowWidth = this.updateWindowWidth.bind(this);


    // handle columns for each layout breakpoint
    const { children } = this.props;
    this.twoCol = [[], []];
    this.threeCol = [[], [], []];
    for (let i = 0; i < children.length; i++) {
      if (i % 2 === 0) {
        this.twoCol[0].push(children[i]);
        if (i + 1 < children.length) {
          this.twoCol[1].push(children[i + 1]);
        }
      }
      if (i % 3 === 0) {
        this.threeCol[0].push(children[i]);
        if (i + 1 < children.length) {
          this.threeCol[1].push(children[i + 1]);
        }
        if (i + 2 < children.length) {
          this.threeCol[2].push(children[i + 2]);
        }
      }
    }

    this.state = {
      layoutType: null,
    };
  }

  componentWillMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth() {
    /*
    Given the window size determines what layout type to render. Will set
    the state.layoutType if new breakpoint is encountered.
    */
    const windowWidth = window.innerWidth;
    if (windowWidth >= breakPoints.lg) {
      if (this.state.layoutType !== 'large') {
        this.setState({
          layoutType: 'large',
        });
      }
    } else if (windowWidth < breakPoints.lg && windowWidth > breakPoints.md) {
      if (this.state.layoutType !== 'medium') {
        this.setState({
          layoutType: 'medium',
        });
      }
    } else if (this.state.layoutType !== 'small') {
      this.setState({
        layoutType: 'small',
      });
    }
  }

  render() {
    /*
    Depending on the layoutType renders the correct layout. Also checks
    layout for edge cases such as childern.length === 2 || 3.
    */
    let layout = null;
    switch (this.state.layoutType) {
      case 'large': {
        if (this.props.children.length === 2) {
          layout = (
            <MasonryContainer>
              <MasonryColumn>
                {this.twoCol[0]}
              </MasonryColumn>
              <MasonryColumn>
                {this.twoCol[1]}
              </MasonryColumn>
            </MasonryContainer>
          );
          break;
        }
        if (this.props.children.length === 1) {
          layout = (
            <MasonryContainer>
              <MasonryColumn>
                {this.props.children}
              </MasonryColumn>
            </MasonryContainer>
          );
          break;
        }
        layout = (
          <MasonryContainer>
            <MasonryColumn>
              {this.threeCol[0]}
            </MasonryColumn>
            <MasonryColumn>
              {this.threeCol[1]}
            </MasonryColumn>
            <MasonryColumn>
              {this.threeCol[2]}
            </MasonryColumn>
          </MasonryContainer>
        );
        break;
      }
      case 'medium': {
        if (this.props.children.length === 1) {
          layout = (
            <MasonryContainer>
              <MasonryColumn>
                {this.props.children}
              </MasonryColumn>
            </MasonryContainer>
          );
          break;
        }
        layout = (
          <MasonryContainer>
            <MasonryColumn>
              {this.twoCol[0]}
            </MasonryColumn>
            <MasonryColumn>
              {this.twoCol[1]}
            </MasonryColumn>
          </MasonryContainer>
        );
        break;
      }
      default:
        layout = (
          <MasonryContainer>
            <MasonryColumn>
              {this.props.children}
            </MasonryColumn>
          </MasonryContainer>
        );
    }
    return layout;
  }
}

export default Masonry;
