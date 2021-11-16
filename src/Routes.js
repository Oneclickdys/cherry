import { default as React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Code from './modules/views/Code/Code';
import Home from './modules/views/Home/Home';
import QuizList from './modules/views/QuizList/QuizList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/code" element={<Code />} />
        <Route exact path="/list" element={<QuizList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
