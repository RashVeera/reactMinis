import { useState } from 'react';
import './App.css';
import Select from 'react-select'
 
function App() {
  const [selectedoptions,setselectedoption]=useState([])
  const [display,setdisplay]=useState(false)
  const options =[
    {value:'india',label:"India"},
    {value:"indonesia",label:"Indonesia"},
    {value:"bali",label:"Bali"},
    {value:"Vietnam",label:"Vietnam"},
    {value:"singapore",label:"Singapore"}
  ]

  const handlechange =(selectedoption)=>{
    if(selectedoptions.length<=0){
      setdisplay(false)
    }
    setselectedoption(selectedoption)
  }

  const handleclick =() =>{
    setdisplay(true)
  }


  return (
    <div className="App">
      <h1>Multi select Dropdown</h1>
      <div className='select'>
      <Select
      options={options}
      onChange={handlechange}
      value={selectedoptions}
      isMulti={true}
      className='select-dropdown'
      />
      <button onClick={handleclick}>Submit</button>
      </div>
      { display && selectedoptions.length>0 &&
      <span className='selected-display'>You've selected the values: {selectedoptions.map((singleoption)=> singleoption.label).join(" ,")}</span>
}
    </div>
  );
}

export default App;
