import styled from 'styled-components';

//cijeli viewport
export const ScreenCanvas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 1080px;
  background-color: #f4f5f7;
`;
//cijeli viewport end

//slika dvorane
export const HallImage = styled.img.attrs({
  src: 'url.props'
})`
  width: 244px;
  height: 138px;
  z-index: 0;
  object-fit: contain;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.5);
`;
// slika dvorane end

export const DivImage = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center
  ${'' /* background-color: #93e9bb; */}
  width: 244px;
  height: 136px;
  margin: 10px;
  
`;
export const ImeDvoranePlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 48px;
  border-radius: 3px;
  background-color: #808080;
  align-self: flex-end;
  position: absolute;
`;

//tipografija
export const ImeDvoraneText = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  font-family: Poppins, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
`;

export const HeadlineText = styled.div`
  margin-left: 125px;
  margin-top: 25px;
  margin-bottom: 5px;
  font-family: Lora, Georgia, serif;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

export const SubheadlineText = styled.div`
  margin-left: 125px;
  margin-bottom: 15px;
  width: 764px;
  height: 24px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

//Dovrane layout
export const LayoutFirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LayoutSecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
// kraj Dvorane layout

export const MainContainer = styled.div`
  margin-top: 4em;
  ${'' /* display: flex; */}
  ${'' /* flex-directon: row; */}
  width: 1024px;
  height: 472px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
`;
