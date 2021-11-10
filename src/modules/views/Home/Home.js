import React, { useEffect } from "react";
import { joinGame } from "../../../server/firebase";

const Home = () => {
  useEffect(() => {
    // joinGame("xx", "jany");
  }, []);
  return <div className="home">Hola! soy la home</div>;
};

export default Home;
