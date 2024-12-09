import { useState } from 'react';
import './App.css';
import ProgressBar from './Components/ProgressBar';

function App() {
  const [show,setshow]=useState(false)

  return (
    <div className="App">
      {show && <ProgressBar/>}
      <button className={`button ${show ? "on" : "off"}`}
 onClick={()=>{setshow(!show)}}>{show?'On':'Off'}</button>
    </div>
  );
}

export default App;
