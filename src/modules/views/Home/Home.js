import React from "react";
import JoinForm from "../../components/forms/JoinForm/JoinForm";
import LayoutDefault from "../../layout/LayoutDefault/LayoutDefault";
import useHome from "./useHome";

const Home = () => {
  const { onSubmit, game } = useHome();

  return (
    <LayoutDefault>
      <div className="home">Hola! soy la home</div>
      {!game && <JoinForm onSubmit={onSubmit} />}
      {game && (
        <JoinForm onSubmit={onSubmit} placeholder={"Escribe tu nombre"} />
      )}
      {/* {game && <JoinForm onSubmit={getsCode} />} */}
    </LayoutDefault>
  );
};

export default Home;
