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
  const value = React.useMemo(() => ({ gameCode, setGameCode, currentQuiz, setCurrentQuiz, user, setUser }), [gameCode, currentQuiz, user]);
  return <AppContext.Provider value={value} {...props} />;
}
