import React from 'react';

import * as Styled from './ModalStyle';

const Modal = props => (
  <Styled.ModalContainer visible={props.visible}>
    <Styled.Box
      pos="fixed"
      top="0"
      left="0"
      wd="100%"
      hg="100%"
      backgroundColor="#5f6d75"
    >
      Hello
    </Styled.Box>
  </Styled.ModalContainer>
);

export default Modal;
