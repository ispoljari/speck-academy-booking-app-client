import React, { Component } from 'react';

import {
  ModalContainer,
  ModalOuterBox,
  ModalInnerBox,
  ModalContentWrapper,
  Button
} from './ModalStyle';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKeyPress);
  }

  handleEscapeKeyPress = e => {
    if (e.key === 'Escape') {
      this.props.onEscapeKeyPress();
    }
  };

  render() {
    const { visible, onClick, children } = this.props;
    return (
      <ModalContainer visible={visible}>
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
  }
}

export default Modal;
