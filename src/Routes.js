import { default as React, useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Code from './modules/views/Code/Code';
import Create from './modules/views/Create/Create';
import GuestAnswers from './modules/views/Guest/GuestAnswers/GuestAnswers';
import GuestCountdown from './modules/views/Guest/GuestCountdown/GuestCountdown';
import GuestPodium from './modules/views/Guest/GuestPodium/GuestPodium';
import GuestQuestion from './modules/views/Guest/GuestQuestion/GuestQuestion';
import GuestRanking from './modules/views/Guest/GuestRanking/GuestRanking';
import GuestStatement from './modules/views/Guest/GuestStatement/GuestStatement';
import Home from './modules/views/Home/Home';
import HostAnswers from './modules/views/Host/HostAnswers/HostAnswers';
import HostCountdown from './modules/views/Host/HostCountdown/HostCountdown';
import HostPodium from './modules/views/Host/HostPodium/HostPodium';
import HostQuestion from './modules/views/Host/HostQuestion/HostQuestion';
import HostRanking from './modules/views/Host/HostRanking/HostRanking';
import HostStatement from './modules/views/Host/HostStatement/HostStatement';
import Join from './modules/views/Join/Join';
import { getCurrentPage } from './server/firebase';
import { PAGES } from './utils/constants';

export const Router = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(null);

  const { gameCode, currentQuiz } = useAppContext();

  function onChangePageGuest(page) {
    setCurrentPage(page);
    if (page.id === PAGES.countdown) {
      navigate(`/waiting-countdown`);
    } else if (page.id === PAGES.statement) {
      navigate(`/waiting-statement`);
    } else if (page.id === PAGES.question) {
      navigate(`/question-options`);
    } else if (page.id === PAGES.answers) {
      navigate(`/answer-status`);
    } else if (page.id === PAGES.ranking) {
      navigate(`/position`);
    } else if (page.id === PAGES.podium) {
      navigate(`/final-position`);
    } else if (page.id === PAGES.home) {
      navigate(`/`);
    }
  }

  function onChangePageHost(page) {
    console.log(page, 'pagepagepagepage');
    setCurrentPage(page);
  }

  function join(code) {
    getCurrentPage(code, onChangePageGuest);
  }

  function onListenerChangePage(code) {
    getCurrentPage(code, onChangePageHost);
  }

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/code/:quizGuid" element={<Code onListenerChangePage={onListenerChangePage} />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/join" element={<Join join={join} />} />
      <Route exact path="/waiting-countdown" element={<GuestCountdown />} />
      <Route exact path="/countdown" element={<HostCountdown />} />
      {/* <Route exact path="/statement" element={<ShowStatement />} /> */}
      <Route exact path="/statement" element={<HostStatement />} />
      <Route exact path="/waiting-statement" element={<GuestStatement currentPage={currentPage} />} />
      <Route exact path="/question" element={<HostQuestion currentPage={currentPage} />} />
      <Route exact path="/question-options" element={<GuestQuestion currentPage={currentPage} />} />
      <Route exact path="/answers" element={<HostAnswers currentPage={currentPage} />} />
      <Route exact path="/answer-status" element={<GuestAnswers currentPage={currentPage} />} />
      <Route exact path="/ranking" element={<HostRanking currentPage={currentPage} />} />
      <Route exact path="/position" element={<GuestRanking />} />
      <Route exact path="/podium" element={<HostPodium />} />
      <Route exact path="/final-position" element={<GuestPodium />} />
    </Routes>
  );
};

export default Router;
