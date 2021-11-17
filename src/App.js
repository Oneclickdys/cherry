import { useEffect } from 'react';
import Routes from './Routes';
import { initServer } from './server/firebase';
import './_app.scss';
import AppContextProvider from './context/AppContext';

function App() {
  useEffect(() => {
    initServer();
  });

  return (
    <AppContextProvider>
      <div className='app'>
        <Routes />
      </div>
    </AppContextProvider>
  );
}

export default App;
