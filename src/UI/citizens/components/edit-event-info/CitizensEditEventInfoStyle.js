import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-top: 32px;
  width: 1024px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 24px;
`;

export const MainHeader = styled.h1`
  line-height: normal;
  margin-top: 32px;
  margin-bottom: 16px;
  font-family: Lora;
  font-size: 32px;
  color: #000000;
`;

export const MainDescription = styled.p`
  line-height: normal;
  font-family: Poppins, Arial, sans-serif;
  font-size: 14px;
  color: #000000;
  padding-bottom: 16px;
`;
export const FormContainer = styled.div``;

export const FormHeader = styled.h5`
  line-height: normal;
  text-transform: uppercase;
  font-family: Poppins, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #434343;
  padding-top: 16px;
`;
export const FormContainerInfoGroup = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  font-family: Poppins, Arial, sans-serif;
  font-size: 14px;
  opacity: 0.5;
  :required:focus {
    box-shadow: 0 0 3px rgba(255, 0, 0, 0.5);
  }
  :invalid:focus {
    box-shadow: 0 0 2px 1px red;
  }
`;

export const FormInputText = styled.textarea`
  width: 100%;
  height: 136px;
  font-family: Poppins, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding-left: 8px;
  padding-top: 6px;
  padding-right: 8px;
  padding-bottom: 6px;
  margin-top: 8px;
  margin-bottom: 4px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  resize: none;
  opacity: 0.5;
  :required:focus {
    box-shadow: 0 0 3px rgba(255, 0, 0, 0.5);
  }
  :invalid:focus {
    box-shadow: 0 0 2px 1px red;
  }
`;

export const FormInputTextCharacterCounter = styled.p`
  opacity: 0.5;
  font-family: Poppins, Arial, sans-serif;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  text-align: end;
`;
export const FormInlineLabel = styled.h6`
  text-transform: uppercase;
  opacity: 0.5;
  font-family: Poppins, Arial, sans-serif;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
`;
export const FormInlineInput = styled.span`
  display: inline-block;
  width: 374px;
`;
export const CricleMark = styled.div`
  width: 152px;
  height: 152px;
  opacity: 0.4;
  border: solid 16px rgba(130, 212, 167, 0.4);
  border-radius: 50%;
  position: absolute;
  margin-top: 16px;
  margin-left: -114px;
`;
export const NumberMark = styled.div`
  position: absolute;
  font-family: Poppins, Arial, sans-serif;
  font-size: 96px;
  font-weight: 800;
  text-align: center;
  margin-left: 34px;
  color: #82d4a7;
`;
