import { default as React, useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Code from './modules/views/Code/Code';
import Create from './modules/views/Create/Create';
import GuestCountdown from './modules/views/Guest/GuestCountdown/GuestCountdown';
import GuestStatement from './modules/views/Guest/GuestStatement/GuestStatement';
import Home from './modules/views/Home/Home';
import HostCountdown from './modules/views/Host/HostCountdown/HostCountdown';
import HostStatement from './modules/views/Host/HostStatement/HostStatement';
import Join from './modules/views/Join/Join';
import { getCurrentPage } from './server/firebase';
import { PAGES } from './utils/constants';
import HostQuestion from './modules/views/Host/HostQuestion/HostQuestion';
import GuestQuestion from './modules/views/Guest/GuestQuestion/GuestQuestion';

export const Router = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(null);

  const { gameCode, currentQuiz } = useAppContext();

  function onChangePage(page) {
    setCurrentPage(page);
    if (page.id === PAGES.countdown) {
      navigate(`/waiting-countdown`);
    } else if (page.id === PAGES.statement) {
      navigate(`/waiting-statement`);
    }
  }

  function join(code) {
    getCurrentPage(code, onChangePage);
  }

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/code/:quizGuid" element={<Code />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/join" element={<Join join={join} />} />
      <Route exact path="/waiting-countdown" element={<GuestCountdown />} />
      <Route exact path="/countdown" element={<HostCountdown />} />
      {/* <Route exact path="/statement" element={<ShowStatement />} /> */}
      <Route exact path="/statement" element={<HostStatement />} />
      <Route exact path="/waiting-statement" element={<GuestStatement currentPage={currentPage} />} />
      <Route exact path="/host-question" element={<GuestStatement currentPage={currentPage} />} />
      <Route exact path="/question" element={<HostQuestion currentPage={currentPage} />} />
      <Route exact path="/question-options" element={<GuestQuestion currentPage={currentPage} />} />
    </Routes>
  );
};

export default Router;
