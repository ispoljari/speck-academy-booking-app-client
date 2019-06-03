import styled from 'styled-components';

const ModalContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const Box = styled.div`
  display: block;

  ${props => {
    let sumCSS = ``;

    props.pos && (sumCSS += `position: ${props.pos};`);
    props.top && (sumCSS += `top: ${props.top};`);
    props.left && (sumCSS += `left: ${props.left};`);
    props.wd && (sumCSS += `width: ${props.wd};`);
    props.maxWd && (sumCSS += `max-width: ${props.maxWd};`);
    props.hg && (sumCSS += `height: ${props.hg};`);
    props.maxHg && (sumCSS += `max-height: ${props.maxHg};`);

    props.transf && (sumCSS += `transform: ${props.transf};`);
    props.backgroundColor &&
      (sumCSS += `background-color: ${props.backgroundColor};`);

    return sumCSS;
  }}
`;

export { ModalContainer, Box };
