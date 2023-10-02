
import { useState } from 'react';
import { Library } from './components/Library';
import { Login } from './components/Login';


function App() {

  const [isLogged, setIsLogged] = useState(false);


  return(
    <>
      {isLogged ? 
        <>
          <Library 
            setIsLogged={setIsLogged}
          />
        </> :
        <>
          <Login 
            setIsLogged={setIsLogged}
          />
        </>
      }
    </>
  )
}

export default App;
