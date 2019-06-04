const dataArray = [
  {
    id: 1,
    name: 'Velika sportska dvorana',
    address: 'Potočka Ul. 27',
    pictureUrl:
      'http://www.gradonacelnik.hr/Media/Default/Krizevci/Novi%20parket4%20(1).jpg',
    description: 'neki opis sportska dvorana',
    createdAt: '2019-06-02T04:02:12.392Z',
    updatedAt: '2019-06-02T15:23:51.709Z',
    hallReservaltions: [
      {
        id: 1,
        hallFk: 1,
        reservationTitle: 'Speck party 3.0',
        reservationDescription: 'neki opis bla bla bla bla bla',
        reservationStatus: 'pending',
        reservationDate: '2019-06-15',
        reservationStartTime: '19:30:00',
        reservationEndTime: '23:30:00',
        citizenFullName: 'Marino Kolari†',
        citizenOrganization: 'SPECK',
        citizenEmail: 'marino.kolaric@email.com',
        citizenPhoneNumber: '097...',
        createdAt: '2019-06-02T06:13:20.699855',
        updatedAt: '2019-06-02T06:13:20.699855'
      },
      {
        id: 2,
        hallFk: 1,
        reservationTitle: 'Speck party 3.0',
        reservationDescription: 'neki opis bla bla bla bla bla',
        reservationStatus: 'pending',
        reservationDate: '2019-06-15',
        reservationStartTime: '19:30:00',
        reservationEndTime: '23:30:00',
        citizenFullName: 'Marino Kolari†',
        citizenOrganization: 'SPECK',
        citizenEmail: 'marino.kolaric@email.com',
        citizenPhoneNumber: '097...',
        createdAt: '2019-06-02T06:37:50.860037',
        updatedAt: '2019-06-02T06:37:50.860037'
      }
    ]
  },
  {
    id: 2,
    name: 'Dvorana Hrvatskog doma',
    address: 'Ul. Antuna Gustava Matoça 4',
    pictureUrl:
      'https://www.pou-krizevci.hr/wp-content/uploads/2011/05/velika_01.jpg',
    description: 'Hrvatski dom',
    createdAt: '2019-06-02T04:24:11.216Z',
    updatedAt: '2019-06-02T04:24:11.216Z',
    hallReservaltions: [
      {
        id: 3,
        hallFk: 2,
        reservationTitle: 'Speck party 3.0',
        reservationDescription: 'neki opis bla bla bla bla bla',
        reservationStatus: 'pending',
        reservationDate: '2019-06-15',
        reservationStartTime: '19:30:00',
        reservationEndTime: '23:30:00',
        citizenFullName: 'Marino Kolari†',
        citizenOrganization: 'SPECK',
        citizenEmail: 'marino.kolaric@email.com',
        citizenPhoneNumber: '097...',
        createdAt: '2019-06-02T07:12:36.676017',
        updatedAt: '2019-06-02T07:12:36.676017'
      },
      {
        id: 4,
        hallFk: 2,
        reservationTitle: 'Re-volt',
        reservationDescription: 'igranje re-volta',
        reservationStatus: 'approved',
        reservationDate: '2019-06-20',
        reservationStartTime: '09:30:00',
        reservationEndTime: '11:30:00',
        citizenFullName: 'Tomislav Horvat',
        citizenOrganization: null,
        citizenEmail: 'tomislav.horvat@gmail.com',
        citizenPhoneNumber: '098...',
        createdAt: '2019-06-02T18:44:59.906601',
        updatedAt: '2019-06-02T20:01:40.4'
      }
    ]
  },
  {
    id: 5,
    name: 'Konferencijske dvorane RCTP (Razvojni centar i tehnoloçki park)',
    address: 'Franje TuĐmana 20',
    pictureUrl: 'https://rctp.hr/wp-content/uploads/2018/11/konf-dvorana-2.jpg',
    description: 'neki opis tehnoloski centar',
    createdAt: '2019-06-02T04:36:57.945Z',
    updatedAt: '2019-06-02T04:36:57.945Z',
    hallReservaltions: [
      {
        id: 5,
        hallFk: 5,
        reservationTitle: 'Board games',
        reservationDescription: 'Zabava uz board gameove',
        reservationStatus: 'approved',
        reservationDate: '2019-06-25',
        reservationStartTime: '20:00:00',
        reservationEndTime: '23:00:00',
        citizenFullName: 'Jurica Šogorić',
        citizenOrganization: 'IT-S2',
        citizenEmail: 'jurica@email.com',
        citizenPhoneNumber: '097...',
        createdAt: '2019-06-04T02:24:01.601118',
        updatedAt: '2019-06-04T02:38:54.927'
      }
    ]
  }
];

export default dataArray;
