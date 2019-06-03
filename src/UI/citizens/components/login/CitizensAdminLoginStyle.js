import styled from 'styled-components';

const LoginContainer = styled.div`
  box-sizing: border-box;
  padding: 32px;
  margin: auto;
  width: 632px;
  height: 264px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
`;

const TitleAdminLogin = styled.div`
  width: 568px;
  height: 40px;
  font-family: 'Lora', serif;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: 24px;
`;

const FormComponentBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormComponent = styled.div`
  width: 272px;
  heihgt: 64px;
`;

const FormComponentName = styled.div`
  width: 100%;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const FormComponentInput = styled.input`
  margin-top: 8px;
  width: 272px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
`;

const LoginSubmitButton = styled.button`
  margin-top: 30px;
  margin-left: 106px;
  width: 356px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4951;
`;

const LoginSubmitButtonText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: auto;
`;

export {
  LoginContainer,
  TitleAdminLogin,
  FormComponentBox,
  FormComponent,
  FormComponentName,
  FormComponentInput,
  LoginSubmitButton,
  LoginSubmitButtonText
};
