import React from "react"

const AppContext = React.createContext()

export function useAppContext() {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error(`useAppContext must be used within a AppContextProvider`)
  }
  return context
}

export default function AppContextProvider(props) {
  const [quizCode, setQuizCode] = React.useState('initial value ...')
  const value = React.useMemo(() => ({quizCode, setQuizCode}), [quizCode])
  return <AppContext.Provider value={value} {...props} />
}
