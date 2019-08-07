import React from 'react';

import {
  ModalContainer,
  ModalOuterBox,
  ModalInnerBox,
  ModalContentWrapper,
  Button
} from './ModalStyle';

const Modal = ({ onClick, children }) => (
  <ModalContainer>
    <ModalOuterBox>
      <ModalInnerBox>
        <ModalContentWrapper>
          <Button onClick={onClick}>&#10005;</Button>
          {children}
        </ModalContentWrapper>
      </ModalInnerBox>
    </ModalOuterBox>
  </ModalContainer>
);

export default Modal;
