import { default as React } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Code from './modules/views/Code/Code';
import Create from './modules/views/Create/Create';
import GuestCountdown from './modules/views/Guest/GuestCountdown/GuestCountdown';
import Home from './modules/views/Home/Home';
import HostCountdown from './modules/views/Host/HostCountdown/HostCountdown';
import ShowStatement from './modules/views/Host/ShowStatement/ShowStatement';
import Join from './modules/views/Join/Join';
import { getCurrentPage } from './server/firebase';
import { PAGES } from './utils/constants';

export const Router = () => {
  let navigate = useNavigate();

  const { gameCode, currentQuiz } = useAppContext();
  console.log('gameCode: ', gameCode);
  console.log('currentQuiz: ', currentQuiz);

  function onChangePage(page) {
    console.log(page);
    console.log(PAGES.countdown, 'lolololo');
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
      <Route exact path="/code/:quizGuid" element={<Code />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/join" element={<Join join={join} />} />
      <Route exact path="/waiting-countdown" element={<GuestCountdown />} />
      <Route exact path="/countdown" element={<HostCountdown />} />
      <Route exact path="/statement" element={<ShowStatement />} />
    </Routes>
  );
};

export default Router;
