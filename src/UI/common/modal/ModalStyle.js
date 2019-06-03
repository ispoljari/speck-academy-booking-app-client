import styled, { css } from 'styled-components';

const stylesAPI = css`
  ${props => {
    let sumCSS = ``;

    props.pos && (sumCSS += `position: ${props.pos};`);
    props.top && (sumCSS += `top: ${props.top};`);
    props.right && (sumCSS += `right: ${props.right};`);
    props.left && (sumCSS += `left: ${props.left};`);
    props.wd && (sumCSS += `width: ${props.wd};`);
    props.maxWd && (sumCSS += `max-width: ${props.maxWd};`);
    props.hg && (sumCSS += `height: ${props.hg};`);
    props.maxHg && (sumCSS += `max-height: ${props.maxHg};`);

    props.transf && (sumCSS += `transform: ${props.transf};`);
    props.borderRadius && (sumCSS += `border-radius: ${props.borderRadius};`);
    props.p && (sumCSS += `padding: ${props.p};`);
    props.backgroundColor &&
      (sumCSS += `background-color: ${props.backgroundColor};`);

    return sumCSS;
  }}
`;

const ModalContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const Box = styled.div`
  display: block;

  ${stylesAPI};
`;

const Button = styled.button`
  border: 0;
  font-size: 20px;
  cursor: pointer;
  color: #c9c9c9;

  ${stylesAPI};
`;

export { ModalContainer, Box, Button };
