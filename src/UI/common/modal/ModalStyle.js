import styled from 'styled-components';

const ModalContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const ModalOuterBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalInnerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #fff;
  border-radius: 4px;
`;

const ModalContentWrapper = styled.div`
  position: relative;
  padding: 32px;
`;

const Button = styled.button`
  position: absolute;
  right: 32px;
  padding: 0;

  border: 0;
  font-size: 20px;
  cursor: pointer;
  color: #c9c9c9;
`;

export {
  ModalContainer,
  ModalInnerBox,
  ModalOuterBox,
  ModalContentWrapper,
  Button
};
