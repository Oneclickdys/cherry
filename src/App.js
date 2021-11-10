import { useEffect } from "react";
import Routes from "./Routes";
import { initServer } from "./server/firebase";

function App() {
  useEffect(() => {
    initServer();
  });

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
