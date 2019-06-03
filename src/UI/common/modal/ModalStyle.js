import styled from 'styled-components';

const ModalContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const Box = styled.div`
  display: block;

  ${props => {
    let sumCSS = ``;

    props.pos && (sumCSS += `position: ${props.pos}`);
    props.top && (sumCSS += `top: ${props.top}`);
    props.left && (sumCSS += `left: ${props.left}`);
    props.width && (sumCSS += `width: ${props.wd}`);
    props.maxWidth && (sumCSS += `max-width: ${props.maxWd}`);
    props.height && (sumCSS += `height: ${props.hg}`);
    props.maxHeight && (sumCSS += `max-height: ${props.maxHg}`);
    props.transform && (sumCSS += `transform: ${props.transf}`);

    return sumCSS;
  }}
`;

export { ModalContainer, Box };
