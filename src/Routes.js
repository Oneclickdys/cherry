import { default as React, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Code from './modules/views/Code/Code';
import Create from './modules/views/Create/Create';
import Home from './modules/views/Home/Home';
import Join from './modules/views/Join/Join';
import GuestCountdown from './modules/views/Guest/GuestCountdown/GuestCountdown';
import HostCountdown from './modules/views/Host/HostCountdown/HostCountdown';
import { getCurrentPage } from './server/firebase';
import { PAGES } from './utils/constants';
import { useNavigate } from 'react-router';

export const Router = () => {
    let navigate = useNavigate();

  const { quizCode } = useAppContext();

  function onChangePage(page) {
    console.log(page)
    console.log(PAGES.countdown, "lolololo")
    if (page.id === PAGES.countdown) {
      navigate(`/waiting-countdown`);
    }
    console.log(page, 'pageee');
  }

  function join(code) {
    getCurrentPage(code, onChangePage);
  }

  // async function checkApiHealth() {
  //   const response = await getApiHealth();
  //   if (response.hasOwnProperty('error')) {
  //     history.push('/error');
  //   }
  // }
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/code" element={<Code />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/join" element={<Join join={join} />} />
        <Route exact path="/waiting-countdown" element={<GuestCountdown />} />
        <Route exact path="/countdown" element={<HostCountdown />} />
      </Routes>
  );
};

export default Router;
