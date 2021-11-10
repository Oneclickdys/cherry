import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import LayoutDefault from "../../layout/LayoutDefault/LayoutDefault";

const Home = () => {
  return (
    <LayoutDefault>
      <div className="home">Hola! soy la home</div>
      <Button />
      <Input />
    </LayoutDefault>
  );
};

export default Home;
