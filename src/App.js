import './styles/App.css';
import Header from './components/Header';
import Connexion from './components/Connexion';
import { useState } from 'react';
import Librairie from './components/Librairie';


function App() {

   const [isConnected, setConnected] = useState(false);
   const [name, setName] = useState("")



  return (
    <div className="App">

        <Header name={name} isConnected={isConnected} />
        <Connexion isConnected={isConnected} setConnected={setConnected} setName={setName} name={name} />
        {(isConnected) ? <Librairie /> : <p>Veuillez vous connecter</p>}
        
    </div>
  );
}

export default App;
