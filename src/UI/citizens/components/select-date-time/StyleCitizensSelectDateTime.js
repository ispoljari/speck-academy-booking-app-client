import styled from 'styled-components';

const Container = styled.div`
  width: 1024px;
  height: 488px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  display: flex;
  margin-left: 208px;
  margin-top: 32px;
`;

const Krug = styled.div`
  display: flex;
  min-width: 152px;
  height: 152px;
  opacity: 0.2;
  border: solid 16px rgba(130, 212, 167, 0.4);
  border-radius: 50%;
  margin: 16px;
`;

const Broj = styled.div`
  width: 76px;
  height: 145px;
  opacity: 0.4;
  font-family: Poppins;
  font-size: 96px;
  font-weight: 800;
  color: #82d4a7;
  margin-left: 36px;
`;

const Field = styled.div`
  font-family: Lora;
  font-size: 32px;
  margin-left: -50px;
`;

const Title = styled.div`
  margin-top: 32px;
  width: 576px;
  height: 40px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  margin-top: 22px;
  font-family: PoppinsRegular;
  font-size: 14px;
  span {
    font-weight: bold;
  }
`;

const Hlabel = styled.div`
  width: 260px;
  height: 24px;
  font-family: PoppinsRegular;
  font-size: 16px;
  color: #434343;
  margin-top: 40px;
  display: inline-block;
`;

const Label = styled.div`
  height: 16px;
  font-family: Poppins-ExtraLight;
  font-size: 12px;
  font-weight: 200;
  display: inline-block;
  margin-right: 75px;
  width: 185px;
  opacity: 0.5;
`;

const LabelContainer = styled.div`
  display: flex;
  margin-left: 260px;
  margin-top: 8px;
`;

const UnosDatum = styled.div`
  width: 244px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  margin-right: 16px;
  line-height: 32px;
  position: relative;
  input {
    border-radius: 2px;
    border: solid 0px rgba(0, 0, 0, 0);
    width: 240px;
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

const UnosVremena = styled(UnosDatum)`
  input {
    :invalid + span:after {
      margin-left: 8px;
      content: 'VRIJEME...';
    }
  }
`;

const UnosContainer = styled(LabelContainer)`
  margin-left: 0px;
`;

const Vector = styled.div`
  position: absolute;
  top: 13px;
  left: 220px;
  width: 8px;
  height: 4px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #555;
`;

const Timeline = styled.div`
  margin-top: 12px;
  width: 750px;
  position: relative;
`;

const Time = styled.div`
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

const Prazno = styled.div`
  width: 25px;
  height: 48px;
  display: inline-block;
`;

const TimeDivide = styled.div(props => ({
  borderLeft: props.left,
  width: '12.5px',
  height: '48px',
  display: 'inline-block'
}));

const Zauzeto = styled.div(props => ({
  left: props.left,
  width: props.duljina,
  background: props.background,
  position: 'absolute',
  top: '42px',
  height: '32px'
}));

const Legenda = styled.div`
  margin-top: 25px;
`;

const LegendaOpis = styled.div`
  margin-top: 8px;
  width: 200px;
  height: 40px;
`;

const LegendaBoja = styled.div(props => ({
  width: '40px',
  height: '40px',
  display: 'inline-block',
  background: props.boja
}));

const LegendaText = styled.div`
  margin-left: 8px;
  font-family: Poppins-Regular;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -20px;
`;

export {
  Container,
  Krug,
  Broj,
  Title,
  SubTitle,
  Hlabel,
  Label,
  LabelContainer,
  UnosDatum,
  UnosContainer,
  UnosVremena,
  Vector,
  Timeline,
  Time,
  Prazno,
  TimeDivide,
  Zauzeto,
  Legenda,
  LegendaOpis,
  LegendaBoja,
  LegendaText,
  Field
};
