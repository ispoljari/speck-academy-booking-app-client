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
// export const HallImage = styled.img.attrs({
//   src: 'url.props'
// })`
//   width: 244px;
//   height: 138px;
//   z-index: 0;
//   object-fit: contain;
//   border-radius: 2px;
//   border: solid 1px rgba(0, 0, 0, 0.5);
// `;

export const HallImage = styled.div`
  background-image: url(${props => props.img});
  width: 244px;
  height: 138px;
`;

// slika dvorane end

export const DivImage = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center
  ${'' /* background-color: #93e9bb; */}
  width: 244px;
  height: 138px;
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

export const LayoutWrapper = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
// kraj Dvorane layout

export const MainContainer = styled.div`
  width: 1024px;
  height: 472px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const Elipse = styled.div`
  display: flex;
  ${'' /* align-items: center; */}
  width: 152px;
  height: 152px;
  opacity: 0.9;
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
  ${'' /* upitno */}
  top: 10px;
  margin-left: 38px;
  color: #82d4a7;
`;
