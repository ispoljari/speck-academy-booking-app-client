import React from 'react';

import styled from 'styled-components';

const HallImage = styled.img.attrs({
  src: 'url.props'
})`
  width: 244px;
  height: 136px;
  z-index: 0;
  object-fit: contain;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.5);
`;

export default HallImage;
