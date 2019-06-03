import React from 'react';

import { ModalContainer, Box, Button } from './ModalStyle';

const Modal = props => (
  <ModalContainer visible={props.visible}>
    <Box
      pos="fixed"
      top="0"
      left="0"
      wd="100%"
      hg="100%"
      backgroundColor="#5f6d75"
    >
      <Box
        pos="fixed"
        backgroundColor="#ffffff"
        top="50%"
        left="50%"
        transf="translate(-50%, -50%)"
        wd="80%"
        maxWd="632px"
        borderRadius="4px"
      >
        <Box p="32px" pos="relative">
          <Button pos="absolute" right="32px" p="0">
            &#10005;
          </Button>
          <div style={{ height: '270px' }}>Dummy</div>
        </Box>
      </Box>
    </Box>
  </ModalContainer>
);

export default Modal;
