import styled from 'styled-components';

const MainContainer = styled.div`
  margin: auto;
  width: 1024px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 32px;
`;

const MainHeader = styled.h1`
  margin-top: 32px;
  margin-bottom: 16px;
  font-family: Lora;
  font-size: 32px;
  color: #000000;
`;

const MainDescription = styled.p`
  font-family: Poppins;
  font-size: 14px;
  color: #000000;
  paddng-bottom: 16px;
`;

const FormContainer = styled.form``;

const FormHeader = styled.h5`
  text-transform: uppercase;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  color: #434343;
  padding-top: 16px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  margin-top: 8px;
`;

const FormInputText = styled.textarea`
  width: 100%;
  height: 136px;
  padding-left: 8px;
  padding-top: 6px;
  padding-right: 8px;
  padding-bottom: 6px;
  margin-top: 8px;
  margin-bottom: 4px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
`;

const FormInlineLabel = styled.h6`
  text-transform: uppercase;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
`;

const FormInlineInput = styled.span`
  display: inline-block;
  width: 374px;
  margin-right: 7px;
`;

export {
  MainContainer,
  MainHeader,
  MainDescription,
  FormContainer,
  FormHeader,
  FormInput,
  FormInputText,
  FormInlineLabel,
  FormInlineInput
};
