import styled from 'styled-components';

export const HeadContainer = styled.div`
  width: 1024px;
  height: 488px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  display: flex;
  ${'' /* margin-left: 208px; */}
  margin-top: 32px;

  ${'' /* additional */}
  background-color: #fff;
`;

export const Circle = styled.div`
  display: flex;
  min-width: 152px;
  height: 152px;
  opacity: 0.4;
  border: solid 16px rgba(130, 212, 167, 0.4);
  border-radius: 50%;
  margin: 16px;
`;

export const Number = styled.div`
  width: 76px;
  height: 145px;
  font-family: Poppins;
  font-size: 96px;
  font-weight: 800;
  color: #82d4a7;
  margin-left: 36px;
`;

export const Field = styled.div`
  font-family: Lora;
  font-size: 32px;
  margin-left: -50px;
`;

export const Title = styled.div`
  margin-top: 32px;
  width: 576px;
  height: 40px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  margin-top: 22px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  span {
    font-weight: 700;
  }
`;

export const Hlabel = styled.div`
  width: 260px;
  height: 24px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  color: #434343;
  margin-top: 40px;
  display: inline-block;
`;

export const Label = styled.div`
  height: 16px;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 200;
  display: inline-block;
  margin-right: 78px;
  width: 185px;
  opacity: 0.5;
`;

export const LabelContainer = styled.div`
  display: flex;
  margin-left: 260px;
  margin-top: 8px;
`;

export const DateInput = styled.div`
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  margin-right: 15px;
  line-height: 32px;
  position: relative;
  input {
    border-radius: 2px;
    border: solid 0px rgba(0, 0, 0, 0);
    width: 244px;
    :invalid + span:after {
      margin-left: 8px;
      content: 'DATUM...';
      position: absolute;
      left: 0;
      top: 0;
    }
    :focus:invalid + span:after {
      display: none;
    }
    :not(:focus):invalid {
      color: transparent;
    }
  }
`;

export const TimeInput = styled(DateInput)`
  input {
    :invalid + span:after {
      margin-left: 8px;
      content: 'VRIJEME...';
    }
  }
`;

export const InputsContainer = styled(LabelContainer)`
  margin-left: 0px;
`;

export const Vector = styled.div`
  position: absolute;
  top: 13px;
  left: 220px;
  width: 8px;
  height: 4px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #555;
`;

export const Timeline = styled.div`
  margin-top: 12px;
  width: 750px;
  position: relative;
`;

export const Time = styled.div`
  width: 50px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  text-align: center;
`;

export const TimeDivide = styled.div(props => ({
  borderLeft: props.left,
  width: '12.5px',
  height: '48px',
  display: 'inline-block'
}));

export const DrawFromDB = styled.div`
  left: ${props => props.left};
  width: ${props => props.wdh};
  background: ${props => props.background};
  position: absolute;
  top: 42px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
`;

export const Legend = styled.div`
  margin-top: 25px;
`;

export const LegendDesc = styled.div`
  margin-top: 8px;
  width: 200px;
  height: 40px;
`;

export const LegendColor = styled.div`
  width: 40px;
  height: 40px;
  display: inline-block;
  background: ${props => props.col};
`;

export const LegendText = styled.div`
  margin-left: 8px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -20px;
`;
