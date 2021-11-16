import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./modules/views/Home/Home";
import Code from "./modules/views/Code/Code";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/code" element={<Code />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
