import styled from 'styled-components/macro';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 632px;
  border-radius: 4px;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
`;
const TopPart = styled.div`
  display: flex;
  flex-direction: row;
`;
const ArenaPicture = styled.img`
  width: 244px;
  height: 136px;
  border-radius: 2px;
  border: solid 1px #229c7f;
  margin-bottom: 8px;
`;
const MidPart = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
`;
const MidRightPart = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;
const SlimText = styled.div`
  width: 204px;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
`;
const Rectangle = styled.input`
  padding-left: 8px;
  box-sizing: border-box;
  width: 300px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  margin: 4px 0 12px;
`;
const Opis = styled.div`
  width: 100%;
`;
const BigRectangle = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 104px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  padding: 8px 16px;
  font-family: Poppins;
  font-size: 16px;
  resize: none;
`;

const Button = styled.button`
  width: 356px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4850;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 114px;
  margin-top: 24px;
`;

export {
  BigRectangle,
  Button,
  Opis,
  Rectangle,
  SlimText,
  Wrapper,
  Title,
  TopPart,
  ArenaPicture,
  MidPart,
  MidRightPart
};
