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

// export const HallImage = styled.div`
//   background-image: url(${props => props.img});
//   position: relative;
//   width: 244px;
//   height: 138px;
//   background-size: cover;
//   border-radius: 2px;
//   border: solid 1px rgba(0, 0, 0, 0.5);
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap; /* enable flex items to wrap */
//   justify-content: center;
//   margin: 5px;
// `;

export const HallImageContainer = styled.div`
  position: relative;
  width: 244px;
  height: 138px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* enable flex items to wrap */
  justify-content: center;
  margin: 5px;
`;

// slika dvorane end

//info-icon

export const InfoIcon = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  border-radius: 50%;
  filter: drop-shadow(1px 1px 1px #000);
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  left: 215px;
`;

export const TextInfoIcon = styled.img`
  src: url(${props => props.img});
  vertical-align: -10%;
  border-radius: 50%;
  filter: drop-shadow(1px 1px 1px #000);
  width: 16px;
  height: 16px;
  position: relative;
`;

//tipografija

export const HeadlineText = styled.div`
  margin-left: 5px;
  margin-top: 32px;
  font-family: Lora, Georgia, serif;
  font-size: 32px;
  font-weight: 800;
  color: #000;
`;

export const SubheadlineText = styled.div`
  margin-left: 5px;
  margin-top: 16px;
  margin-bottom: 22px;
  width: 764px;
  min-height: 24px;
  font-family: Poppins, sans serif;
  font-size: 14px;
  color: #000;
`;

export const HallNameText = styled.div`
  align-self: flex-end;
  width: 155px;
  height: 48px;
  border-radius: 3px;
  background-color: #808080;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #ffffff;
  text-align: center;
  &:hover {
    background-color: #229c7f;
  }
`;

export const HallNameTextCenter = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Dovrane layout

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 742px;
  align-self: center;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
// kraj Dvorane layout

export const MainContainer = styled.div`
  width: 1024px;
  min-height: 472px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const Elipse = styled.div`
  display: flex;

  width: 152px;
  height: 152px;
  opacity: 0.4;
  border: solid 16px rgba(130, 212, 167, 0.4);
  border-radius: 50%;
  position: absolute;
  margin: 16px;
`;

export const Number = styled.div`
  position: absolute;
  font-family: Poppins, sans-serif;
  font-size: 96px;
  font-weight: 800;
  text-align: center;

  top: 10px;
  margin-left: 40px;
  color: #82d4a7;
`;
