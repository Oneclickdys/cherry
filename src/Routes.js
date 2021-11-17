import { default as React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Code from './modules/views/Code/Code';
import Create from './modules/views/Create/Create';
import Home from './modules/views/Home/Home';
import Join from './modules/views/Join/Join';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/code" element={<Code />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
