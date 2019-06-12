import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  box-sizing: Border-box;
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
  color: #000000;
  margin-bottom: 24px;
`;

const ComponentBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Component = styled.div`
  width: 272px;
  height: 64px;
`;

const ComponentName = styled.div`
  width: 100%;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
  color: #000000;
`;

const ComponentInput = styled.input`
  margin-top: 8px;
  width: 272px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  margin-left: 106px;
  width: 356px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4951;
`;

const SubmitButtonText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: auto;
`;

export {
  Body,
  Container,
  TitleAdminLogin,
  ComponentBox,
  Component,
  ComponentName,
  ComponentInput,
  SubmitButton,
  SubmitButtonText
};
