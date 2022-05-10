// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Navbar from './components/navbar.js';
import Textform from './components/textform.js';

function App() {
  const [mode, setMode] = useState('light');
  const switch_mode = ()=>{
      if (mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = 'rgb(61, 75, 152)';
          document.body.style.color = 'white';
      }
      else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
      }
      
  };

  return (
    <>
      <Navbar title = "Malhari" aboutText = "Details" mode = {mode} fun={switch_mode}/>
      <Textform title = "Fill your preferences" mode = {mode} />
    </>
  );
}

export default App;
