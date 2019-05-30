import React from 'react';

import {
  CitizensEditEventInfoContainer,
  CitizensEditEventInfoHeader,
  CitizensEditEventInfoDescription
} from './CitizensEditEventInfoStyle';

class CitizensEditEventInfo extends React.Component {
  render() {
    return (
      <CitizensEditEventInfoContainer>
        <CitizensEditEventInfoHeader>
          Podaci o događaju i Vama
        </CitizensEditEventInfoHeader>
        <CitizensEditEventInfoDescription>
          Recite nam ime svog događaja i pobliže ga objasnite. Nemojte
          zaboraviti ostaviti svoje kontakte podatke kako bismo Vas mogli
          kontaktirati u vezi dodatnih detalja i potvrđivanja rezervacije.
        </CitizensEditEventInfoDescription>
        <form>
          <label>Naziv događaja:</label>
          <br />
          <input type="text" />
        </form>
        <form>
          <label>Opis događaja:</label>
          <br />
          <input type="text" value="Opišite svoj događaj..." />
        </form>
      </CitizensEditEventInfoContainer>
    );
  }
}

export default CitizensEditEventInfo;
