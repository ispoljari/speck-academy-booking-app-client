import React from 'react';

import * as Styled from './ModalStyle';

const Modal = props => (
  <Styled.ModalContainer visible={props.visible}>
    I'm a dumb modal component.
  </Styled.ModalContainer>
);

export default Modal;