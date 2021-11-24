import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import Routes from './Routes';
import { initServer } from './server/firebase';
import './_app.scss';

function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    initServer();
    setIsReady(true);
  }, []);

  return (
    <AppContextProvider>
      {isReady && (
        <div className="app">
          <Router>
            <Routes />
          </Router>
        </div>
      )}
    </AppContextProvider>
  );
}

export default App;
