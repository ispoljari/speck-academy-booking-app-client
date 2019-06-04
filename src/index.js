import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AdminHallRequest from './UI/admin/components/hall-request/AdminHallRequest';

ReactDOM.render(
  <AdminHallRequest
    naziv="Konferencijska Dvorana RCP Dvorana"
    lokacija="Franje Tuđmana 20  123"
    imeeventa="Speck Speck party 3.0 3.0"
    opis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum, leo pulvinar aliquet sagittis, neque ligula sagittis augue, eget finibus lectus leo nec ipsum. Cras nec diam in erat dignissim vehicula non eu leo. Suspendisse potenti. Pellentesque a cursus libero. Praesent ligula lectus, elementum nec tristique non, vehicula at leo."
    datum="25.04.2019"
    vrijeme="09:00 - 22:00"
    imeipreziem="Ivana Horvatić"
    organizacija="Speck agency d.o.o"
    email="hello@speck.agency"
    telmob="099 / 12 34 567"
    datumpodneseno="28.02.2019., 16:58"
  />,
  document.getElementById('root')
);
