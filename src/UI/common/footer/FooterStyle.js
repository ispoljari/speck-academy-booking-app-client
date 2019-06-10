import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  min-height: 100vh;
  padding: 20px;
`;

const Footer1 = styled.div`
  width: 299px;
  height: 18px;
  display: inline;
  opacity: 0.5;
  font-family: Poppins-Regular;
  font-size: 14px;
  color: #434343;
`;

const Footer2 = styled(Footer1)`
  font-family: Poppins-Bold;
  font-weight: bold;
  margin-left: 4px;
`;

const Speck = styled(Footer1)`
  color: #229c7f;
  margin-left: 4px;
`;

const VLine = styled.div`
  display: inline;
  margin-right: 7px;
  border-left: 2px solid rgba(67, 67, 67, 0.5);
  height: 18px;
`;

export { FooterContainer, Footer1, Footer2, Speck, VLine };
