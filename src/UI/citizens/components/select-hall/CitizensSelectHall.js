import React from 'react';

import { API_BASE_URL } from '../../../../config';

import HallImage from './HallImage';

import styled from 'styled-components';

// example of component logic that shows how to fetch data from the API
// remove the code from this component and refactor it into a functional CitizensSelectHall component according to the design mockup

// class CitizensSelectHall extends React.Component {
//   state = {
//     response: '',
//     error: ''
//   };

//   componentDidMount() {
//     this.fetchDataFromAPI();
//   }

//   fetchDataFromAPI = async () => {
//     try {
//       const apiRawData = await fetch(`${API_BASE_URL}/users`);
//       if (!apiRawData.ok) {
//         throw new Error('An error has occured!');
//       }
//       const apiJSONData = await apiRawData.text();
//       this.processResponse(apiJSONData);
//     } catch (error) {
//       this.processError(error.message);
//     }
//   };

//   processResponse = response => {
//     this.setState({
//       response,
//       error: ''
//     });
//   };

//   processError = error => {
//     this.setState({
//       response: '',
//       error
//     });
//   };

//   render() {
//     const { response, error } = this.state;

//     return (
//       <div>
//         <p>{response ? response : error}</p>
//       </div>
//     );
//   }
// }

//cijeli viewport
const ScreenCanvas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 1080px;
  background-color: #f4f5f7;
`;
//cijeli viewport end

const DivImage = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center
  background-color: #93e9bb;
  width: 244px;
  height: 136px;
  margin: 10px;
  
`;
const ImeDvoranePlaceholder = styled.div`
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
const ImeDvoraneText = styled.div`
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

const HeadlineText = styled.div`
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

const SubheadlineText = styled.div`
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
const LayoutFirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const LayoutSecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
// kraj Dvorane layout

const MainContainer = styled.div`
  margin-top: 4em;
  width: 1024px;
  height: 472px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
`;

class CitizensSelectHall extends React.Component {
  render() {
    return (
      <ScreenCanvas>
        <MainContainer>
          <HeadlineText>Odaberite dvoranu</HeadlineText>
          <SubheadlineText>
            Pronađite dvoranu koja vam odgovara. Za dodatne informacije kliknite
            na SVG ikonu.
          </SubheadlineText>
          <LayoutFirstRow>
            <DivImage>
              <HallImage
                src={
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/06e96863003363.5aa278db9f9be.jpg'
                }
              />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>
                  Velika sportska <br />
                  dvorana
                </ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>

            <DivImage>
              <HallImage
                src={
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c671363003363.5aa278db9fe68.jpg'
                }
              />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>
                  Dvorana Hrvatskog <br />
                  doma
                </ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>

            <DivImage>
              <HallImage
                src={
                  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f8c19863003363.5aa278db9f55c.jpg'
                }
              />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>
                  Dvorana Gradske <br />
                  knjižnice
                </ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>
          </LayoutFirstRow>

          <LayoutSecondRow>
            <DivImage>
              <HallImage
                src={
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ff41ee63003363.5aa27931ca4ae.jpg'
                }
              />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>
                  Dvorana TIC
                  <br />
                  (Turistički dom)
                </ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>

            <DivImage>
              <HallImage
                src={
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/78528a63003363.5aa278dba00fe.jpg'
                }
              />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>Konferencijska dvorana RCTP</ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>
          </LayoutSecondRow>
        </MainContainer>
      </ScreenCanvas>
    );
  }
}

export default CitizensSelectHall;
