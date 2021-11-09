import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./modules/views/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
