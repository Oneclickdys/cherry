import { useEffect } from "react";
import Routes from "./Routes";
import { initServer } from "./server/firebase";
import './_app.scss';

function App() {
  useEffect(() => {
    initServer();
  });

  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
