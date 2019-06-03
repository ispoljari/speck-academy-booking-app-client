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
        <Styled.Box p="32px" pos="relative">
          <Styled.Button pos="absolute" right="32px" p="0">
            &#10005;
          </Styled.Button>
          <div style={{ height: '270px' }}>Dummy</div>
        </Styled.Box>
      </Styled.Box>
    </Styled.Box>
  </Styled.ModalContainer>
);

export default Modal;
