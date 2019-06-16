import React from 'react';
import { Route } from 'react-router-dom';

import { AdminRequestsPage, AdminReservationsPage, AdminHallsPage } from '..';
import { AdminHeader } from '../../admin';
import { Footer } from '../../common';
import { API_BASE_URL } from '../../../config';
import { fetchDataFromAPI, errorMsg } from '../../../util';

const AdminPages = ({ match, closeActiveSession }) => {
  const handleClick = async () => {
    const loginEndpoint = `${API_BASE_URL}/admins/logout`;
    const loginHttpConfig = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    };

    try {
      const apiResponse = await fetchDataFromAPI(
        loginEndpoint,
        loginHttpConfig
      );

      if (!apiResponse.ok) {
        throw new Error(errorMsg);
      }

      if (apiResponse.status === 200) {
        processResponse();
      } else {
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.log(error); //TODO: Obavijestiti admina da je logout fail
    }
  };

  const processResponse = () => {
    closeActiveSession();
  };

  return (
    <>
      <AdminHeader onClick={handleClick} />
      <Route path={`${match.path}/requests`} component={AdminRequestsPage} />
      <Route
        path={`${match.path}/reservations`}
        component={AdminReservationsPage}
      />
      <Route path={`${match.path}/halls`} component={AdminHallsPage} />
      <Footer />
    </>
  );
};

export default AdminPages;
