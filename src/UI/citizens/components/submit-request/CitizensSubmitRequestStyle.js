import styled, { css } from 'styled-components';

export const StyledLink = styled.a`
  font-family: Poppins, sans serif;
  font-size: 14px;
  font-weight: 400;
  ${'' /* line-height: 1.14; */}
  color: #000;
  ${'' /* text-align: center; */}
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin-top: 32px;
  width: 1024px;
  min-height: 263px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  ${'' /* margin: 0 auto; */}
  position: relative;
`;

export const Title = styled.p`
  font-family: Lora, sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 20px;
`;
export const LayoutContainer = styled.div`
  //margin: 0 auto;
  margin-left: 130px;
  margin-top: 33px;
`;

export const MainText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  color: #000000;
`;

export const Description = styled.div`
  width: 764px;
  margin-bottom: 20px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactLeft = styled.div`
  margin-right: 13px;
  text-align: end;
  color: #229c7f;
  font-family: Poppins;
  font-size: 14px;
`;
export const ContactRight = styled.div`
  font-family: Poppins;
  font-size: 14px;
  color: #000000;
  text-align: left;
`;

export const Button = styled.button`
  width: 374px;
  height: 40px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: solid 1px #0f4850;
  background-color: #0f4850;
  //color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  ${props => {
    return (
      !props.blockInteractivity &&
      css`
        &:hover {
          background-color: #229c7f;
          border: solid 1px #229c7f;
          transition-duration: 0.2s;
          cursor: pointer;
        }
      `
    );
  }}
`;

export const ButtonText = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-family: Poppins;
  font-size: 14px;
  text-decoration: none;
`;

export const Circle = styled.div`
  margin: 16px;
  width: 152px;
  height: 152px;
  opacity: 0.4;
  border: solid 16px rgba(130, 212, 167, 0.4);
  border-radius: 50%;
  position: absolute;
`;

export const Number = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 96px;
  font-weight: 800;
  top: 10px;
  text-align: center;
  color: #82d4a7;
`;

export const SectorDown = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SpacingDiv = styled.div`
  margin-bottom: 6px;
`;
