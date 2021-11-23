import { useEffect } from 'react';
import Routes from './Routes';
import { initServer } from './server/firebase';
import './_app.scss';
import AppContextProvider from './context/AppContext';
import {
  BrowserRouter as Router,

} from "react-router-dom";
function App() {
  useEffect(() => {
    initServer();
  });

  return (
    <AppContextProvider>
      <div className='app'>
      <Router >
        <Routes />
        </Router>
      </div>
    </AppContextProvider>
  );
}

export default App;
