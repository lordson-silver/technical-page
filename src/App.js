import './App.css';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import React, {useState} from 'react';


function App() {

  const [showMessage, setShowMessage]= useState(false)

  const showTheMessage=()=>{
    setShowMessage((prev)=> !prev)
  }

  return (
    <div className="App">
      <Logo/>     
      <Header/>
      <button onClick={showTheMessage}>Show</button>
      {showMessage && <h2>SHOW THIS ON CLICK</h2>}
    </div>
  );
}

export default App;
