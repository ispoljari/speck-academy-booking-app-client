import styled from 'styled-components';

const ModalContainer = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`;