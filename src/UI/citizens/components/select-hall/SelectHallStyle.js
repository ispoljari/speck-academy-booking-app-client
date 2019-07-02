import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-top: 22px;
  width: 1024px;
  min-height: 200px;
  padding-bottom: 32px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const HallImageContainer = styled.div`
  position: relative;
  max-width: 244px;
  max-height: 139px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  ${'' /* flex-wrap: wrap; */}
  justify-content: center;
  margin: 8px;
  outline: ${props => (props.isSelected ? '5px solid #1D896D' : '')};
  button {
    cursor: pointer;
  }
`;

export const HallImage = styled.img`
  align-self: center;
  width: 100%;
  height: 100%;
`;

// Hall image end

//info-icon

export const InfoBtn = styled.button`
  background: url(${props => props.iconSrc});
  border-radius: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(1px 1px 1px #000);
  width: 20px;
  height: 20px;
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

export const HallNameButton = styled.button`
  position: absolute;
  align-self: flex-end;
  width: 160px;
  border-radius: 3px;
  border-color: ${props => (props.isSelected ? '#1D896D' : '#808080')};
  background-color: ${props => (props.isSelected ? '#1D896D' : '#808080')};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #ffffff;
  text-align: center;
  outline: none;
`;

export const HallNameTextCenter = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

//Halls layout

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 764px;
  align-self: center;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
//Halls layout end

export const Elipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 152px;
  opacity: 0.4;
  border: solid 16px rgba(130, 212, 167, 0.4);
  border-radius: 50%;
  position: absolute;
  margin: 16px;
`;

export const Number = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 96px;
  font-weight: 800;
  color: #82d4a7;
`;
