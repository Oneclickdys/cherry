import React from "react";
import JoinForm from "../../components/forms/JoinForm/JoinForm";
import LayoutDefault from "../../layout/LayoutDefault/LayoutDefault";

const Home = () => {
  return (
    <LayoutDefault>
      <div className="home">Hola! soy la home</div>
      <JoinForm />
    </LayoutDefault>
  );
};

export default Home;
