import React, { Component } from 'react';

import { ModalContainer } from './ModalStyle';

class Modal extends Component {
  state = {
    visible: false
  };

  render() {
    return (
      <div>
        I'm a dumb modal component.
      </div>
    )
  }
}