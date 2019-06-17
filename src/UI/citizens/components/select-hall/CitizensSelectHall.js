import React from 'react';

import { API_BASE_URL } from '../../../../config';

import styled from 'styled-components';

import HallImage from './HallImage';

import hallImage01 from '../../../../images/01.png';

import hallImage02 from '../../../../images/velika_01.png';

import hallImage03 from '../../../../images/gradska-knjiznica.png';

import hallImage04 from '../../../../images/turisticki-dom.png';

import hallImage05 from '../../../../images/konf-dvorana-1.png';

import Icon from '../../../../images/info-icon@3x.png';

//styles

import {
  StyledLink,
  HallImageContainer,
  HallNameButton,
  HallNameTextCenter,
  HeadlineText,
  SubheadlineText,
  FirstRow,
  SecondRow,
  MainContainer,
  InfoIcon,
  TextInfoIcon,
  Elipse,
  Number,
  LayoutWrapper
} from './SelectHallStyle.js';
import { directive } from '@babel/types';

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

// function CitizensSelectHall(props)

function CitizensSelectHall() {
  return (
    <div>
      <MainContainer>
        <Elipse>
          <Number>1</Number>
        </Elipse>
        <LayoutWrapper>
          <HeadlineText>Odaberite dvoranu</HeadlineText>
          <SubheadlineText>
            Pronađite dvoranu koja vam odgovara. Za dodatne informacije kliknite
            na <TextInfoIcon src={Icon} /> ikonu.
          </SubheadlineText>

          <FirstRow>
            <HallImageContainer>
              <img src={hallImage01} />
              <a href="#" rel="noopener noreferrer">
                <InfoIcon src={Icon} />
              </a>

              <HallNameButton>
                {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
                <HallNameTextCenter>Velika sportska dvorana</HallNameTextCenter>
                {/* </StyledLink> */}
              </HallNameButton>
            </HallImageContainer>

            <HallImageContainer>
              <img src={hallImage02} />
              <a href="#" rel="noopener noreferrer">
                <InfoIcon src={Icon} />
              </a>
              <HallNameButton>
                {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
                <HallNameTextCenter>Dvorana Hrvatskog doma</HallNameTextCenter>
                {/* </StyledLink> */}
              </HallNameButton>
            </HallImageContainer>

            <HallImageContainer>
              <img src={hallImage03} />
              <a href="#" rel="noopener noreferrer">
                <InfoIcon src={Icon} />
              </a>
              <HallNameButton>
                {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
                <HallNameTextCenter>
                  Dvorana gradske knjižnice
                </HallNameTextCenter>
                {/* </StyledLink> */}
              </HallNameButton>
            </HallImageContainer>
          </FirstRow>

          <SecondRow>
            <HallImageContainer>
              <img src={hallImage04} />
              <a href="#" rel="noopener noreferrer">
                <InfoIcon src={Icon} />
              </a>
              <HallNameButton>
                {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
                <HallNameTextCenter>
                  Dvorana TIC (Turistički dom)
                </HallNameTextCenter>
                {/* </StyledLink> */}
              </HallNameButton>
            </HallImageContainer>

            <HallImageContainer>
              <img src={hallImage05} />
              <a href="#" rel="noopener noreferrer">
                <InfoIcon src={Icon} />
              </a>
              <HallNameButton>
                <StyledLink href="" target="_blank" rel="noopener noreferrer">
                  <HallNameTextCenter>
                    Konferencijska dvorana RCTP
                  </HallNameTextCenter>
                </StyledLink>
              </HallNameButton>
            </HallImageContainer>
          </SecondRow>
        </LayoutWrapper>
      </MainContainer>
    </div>
  );
}

export default CitizensSelectHall;
