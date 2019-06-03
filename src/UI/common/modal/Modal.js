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
      <Styled.Box
        pos="fixed"
        backgroundColor="#ffffff"
        top="50%"
        left="50%"
        transf="translate(-50%, -50%)"
        wd="80%"
        maxWd="632px"
      >
        <Styled.Box pos="fixed" top="32px" right="32px" />
        <div style={{ width: '600px', height: '270px' }}>Dummy</div>
      </Styled.Box>
    </Styled.Box>
  </Styled.ModalContainer>
);

export default Modal;
