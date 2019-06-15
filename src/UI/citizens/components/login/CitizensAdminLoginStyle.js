import styled from 'styled-components';

const Form = styled.form`
  display: block;
  width: 568px;
`;

const Title = styled.h2`
  font-family: 'Lora', serif;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  display: block;
  font-family: Poppins;
  font-size: 16px;
  color: #000000;
  text-transform: uppercase;
`;

const Input = styled.input`
  margin-top: 8px;
  width: 272px;
  height: 32px;
  padding: 5px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
`;

const Submit = styled.button`
  display: block;
  margin: 30px auto 0px;
  width: 356px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4951;
  cursor: pointer;
`;

const TextField = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  text-transform: uppercase;
`;

export { Form, Title, FlexContainer, Label, Input, Submit, TextField };
