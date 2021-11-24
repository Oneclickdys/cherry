import { useEffect, useState } from 'react';
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
          <Routes />
        </div>
      )}
    </AppContextProvider>
  );
}

export default App;
