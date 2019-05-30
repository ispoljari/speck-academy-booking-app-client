import React from 'react';
import ReactDOM from 'react-dom';

import EditHallComponent from './UI/admin/components/edit-hall/AdminEditHall.js';

ReactDOM.render(
  <EditHallComponent
    naziv="Velika Dvorana"
    lokacija="krizevci 123"
    opis="Lorem ipsum blablalndjshibkdsub"
  />,
  document.getElementById('root')
);
