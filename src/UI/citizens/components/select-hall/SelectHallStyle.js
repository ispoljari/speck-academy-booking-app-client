import styled from 'styled-components';

export const StyledLink = styled.a`
  font-family: Poppins, sans serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
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

export const MainContainer = styled.div`
  margin-top: 32px;
  width: 1024px;
  min-height: 472px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const HallImageContainer = styled.div`
  position: relative;
  width: 244px;
  height: 139px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  ${'' /* flex-wrap: wrap; */}
  justify-content: center;
  margin: 5px;
`;

export const HallImage = styled.img`
  align-self: center;
  width: 244px;
  height: 138px;
`;

// Hall image end

//info-icon

export const InfoIcon = styled.img`
  border-radius: 50%;
  filter: drop-shadow(1px 1px 1px #000);
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  left: 215px;
`;

export const TextInfoIcon = styled.img`
  vertical-align: -10%;
  border-radius: 50%;
  filter: drop-shadow(1px 1px 1px #000);
  width: 16px;
  height: 16px;
  position: relative;
`;

//Typography

export const HeadlineText = styled.div`
  margin-top: 32px;
  font-family: Lora, Georgia, serif;
  font-size: 32px;
  font-weight: 800;
  color: #000;
`;

export const SubheadlineText = styled.div`
  margin-top: 16px;
  margin-bottom: 22px;
  width: 764px;
  min-height: 24px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  color: #000;
`;

export const HallNameText = styled.div`
  position: absolute;
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
  ${'' /* margin-top: 1px; */}
`;

export const HallNameTextCenter = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

//Halls layout

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
//Halls layout end

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
