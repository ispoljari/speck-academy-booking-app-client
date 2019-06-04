import React from 'react';

import {
  ModalContainer,
  ModalOuterBox,
  ModalInnerBox,
  ModalContentWrapper,
  Button
} from './ModalStyle';

const Modal = ({ visible, handleClose, children }) => (
  <ModalContainer visible={visible}>
    <ModalOuterBox>
      <ModalInnerBox>
        <ModalContentWrapper>
          <Button onClick={handleClose}>&#10005;</Button>
          {children}
        </ModalContentWrapper>
      </ModalInnerBox>
    </ModalOuterBox>
  </ModalContainer>
);

export default Modal;
