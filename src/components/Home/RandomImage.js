import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 1.25rem;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
`;

class RandomImage extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://semantic-ui.com/images/wireframe/image.png'
    }
  }

  componentDidMount() {
    this._isMounted = true;

    const randomSize = Math.floor(Math.random() * 20) + 120;
    fetch(`https://source.unsplash.com/collection/2581767/${randomSize}x${randomSize}/`)
      .then((response) => {
        if (this._isMounted) {
          this.setState({ url: response.url })
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }  

  render() {
    return <Picture src={this.state.url} alt="" />;
  }
}

export default RandomImage;
