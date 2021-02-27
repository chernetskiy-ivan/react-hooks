import React,{useState} from 'react'
import Main from './Main'
import Alert from './Alert'

export const AlertContext = React.createContext()

function App() {
  const [alert, setAlert]= useState(false)
  const toggelAlert = () => setAlert(prev => !prev)

  return (
      <AlertContext.Provider value={alert}>
        <div className={'container pt-3'}>
          <Alert />
          <Main toggel={toggelAlert}/>
        </div>
      </AlertContext.Provider>
  );
}

export default App;