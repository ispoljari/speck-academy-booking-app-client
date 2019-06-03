import React from 'react';

import { API_BASE_URL } from '../../../../config';

import HallImage from './HallImage';

// import styled from 'styled-components';

import hallImage01 from '../../../../images/01.png';

import hallImage02 from '../../../../images/velika_01.png';

import hallImage03 from '../../../../images/gradska-knjiznica.png';

import hallImage04 from '../../../../images/turisticki-dom@3x.png';

import hallImage05 from '../../../../images/konf-dvorana-1@3x.png';

import Icon from '../../../../images/info-icon.svg';

//styles

import {
  ScreenCanvas,
  HallNameText,
  HallNameTextCenter,
  HeadlineText,
  SubheadlineText,
  FirstRow,
  SecondRow,
  MainContainer,
  Elipse,
  Number,
  LayoutWrapper
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
          <Elipse>
            <Number>1</Number>
          </Elipse>
          <HeadlineText>Odaberite dvoranu</HeadlineText>
          <SubheadlineText>
            Pronađite dvoranu koja vam odgovara. Za dodatne informacije kliknite
            na SVG ikonu.
          </SubheadlineText>
          <LayoutWrapper>
            <FirstRow>
              <HallImage img={hallImage01}>
                <HallNameText>
                  <HallNameTextCenter>
                    Velika sportska dvorana
                  </HallNameTextCenter>
                </HallNameText>
              </HallImage>

              <HallImage img={hallImage02}>
                <HallNameText>
                  <HallNameTextCenter>
                    Dvorana Hrvatskog doma
                  </HallNameTextCenter>
                </HallNameText>
              </HallImage>

              <HallImage img={hallImage03}>
                <HallNameText>
                  <HallNameTextCenter>
                    Dvorana Gradske knjižnice
                  </HallNameTextCenter>
                </HallNameText>
              </HallImage>
            </FirstRow>

            <SecondRow>
              <HallImage img={hallImage04}>
                <HallNameText>
                  <HallNameTextCenter>
                    Dvorana TIC (Turistički Dom)
                  </HallNameTextCenter>
                </HallNameText>
              </HallImage>

              <HallImage img={hallImage05}>
                <HallNameText>
                  <HallNameTextCenter>
                    Konferencijska dvorana RCTP
                  </HallNameTextCenter>
                </HallNameText>
              </HallImage>
            </SecondRow>
          </LayoutWrapper>
        </MainContainer>
      </ScreenCanvas>
    );
  }
}

export default CitizensSelectHall;
