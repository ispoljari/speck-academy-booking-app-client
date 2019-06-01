import React from 'react';

import { API_BASE_URL } from '../../../../config';

import HallImage from './HallImage';

import styled from 'styled-components';

import hallImage01 from '../../../../images/01.png';

import hallImage02 from '../../../../images/velika_01.png';

import hallImage03 from '../../../../images/gradska-knjiznica.png';

import hallImage04 from '../../../../images/turisticki-dom@3x.png';

import hallImage05 from '../../../../images/konf-dvorana-1@3x.png';

//styles

import {
  ScreenCanvas,
  DivImage,
  ImeDvoranePlaceholder,
  ImeDvoraneText,
  HeadlineText,
  SubheadlineText,
  LayoutFirstRow,
  LayoutSecondRow,
  MainContainer
} from './SelectHallStyle.js';

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
              <HallImage src={hallImage01} />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>
                  Velika sportska <br />
                  dvorana
                </ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>

            <DivImage>
              <HallImage src={hallImage02} />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>
                  Dvorana Hrvatskog <br />
                  doma
                </ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>

            <DivImage>
              <HallImage src={hallImage03} />
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
              <HallImage src={hallImage04} />
              <ImeDvoranePlaceholder>
                <ImeDvoraneText>
                  Dvorana TIC
                  <br />
                  (Turistički dom)
                </ImeDvoraneText>
              </ImeDvoranePlaceholder>
            </DivImage>

            <DivImage>
              <HallImage src={hallImage05} />
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
