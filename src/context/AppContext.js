import React from 'react';

const AppContext = React.createContext();

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext must be used within a AppContextProvider`);
  }
  return context;
}

export default function AppContextProvider(props) {
  const [gameCode, setGameCode] = React.useState('');
  const [currentQuiz, setCurrentQuiz] = React.useState({});
  const [user, setUser] = React.useState(null);
  const [lastPlayerResponse, setLastPlayerResponse] = React.useState({});
  const value = React.useMemo(
    () => ({ gameCode, setGameCode, currentQuiz, setCurrentQuiz, user, setUser, lastPlayerResponse, setLastPlayerResponse }),
    [gameCode, currentQuiz, user, lastPlayerResponse]
  );
  return <AppContext.Provider value={value} {...props} />;
}
