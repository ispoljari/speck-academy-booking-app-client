import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #ffffff;
  text-align: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 632px;
  height: 250px;
  background-color: #ffffff;
  position: relative;
  margin: 0 auto;
`;

export const Button = styled.div`
  width: 374px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4850;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  &:hover {
    background-color: #229c7f;
  }
`;

export const ButtonText = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-family: Poppins;
  font-size: 14px;
  text-decoration: none;
`;

export const Title = styled.p`
  width: 128px;
  height: 41px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.28;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

export const Description = styled.p`
  //width: 285px;
  height: 23px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-top: 23px;
`;

export const CheckImage = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 83.3px;
  height: 83.7px;
  object-fit: contain;
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  margin-top: 24px;
  margin-right: 33px;
`;
export const CheckImage2 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 83.3px;
  height: 83.7px;
  object-fit: contain;
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  margin-top: 24px;
  margin-right: 33px;
`;

export const SecContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const ThContainer = styled.div`
  // display: flex;
  // justify-content: flex-start;
  align-self: flex-start;
  position: absolute;
  margin-top: 33px;
  margin-left: 31px;
`;

export const ButtonContainer = styled.div`
  align-content: center;
  justify-content: center;
  display: flex;
  margin: 85px;
`;
