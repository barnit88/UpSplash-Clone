import React, { useState ,useEffect} from 'react';
import './App.css';

function Apple() {
  
  const getMode = () => {
    const initialMode = localStorage.getItem('mode')
    if (initialMode==null){
      if(window.matchMedia("(prefers-color-scheme:dark)").matches){
        return true 
      }
      else{
        return false
      }
    }else{
      return JSON.parse(initialMode)
    }
  }
  //this way u can check user preference of mode 

  const [dark ,setdark] = useState(getMode()); 
  
  
  useEffect(() => {
     localStorage.setItem("mode" , JSON.stringify(dark))
  }, [dark]);


  return (
    <div className={dark?"App dark-mode" : "App"}>
      <div className= "nav">
        <label class ="switch">
          <input 
          type ="checkbox"
          checked = {dark}
          onChange={() => setdark(!dark)}/>
          <span class = "slider round"></span>
        
        </label>
      </div>     
      <div className="content">
        <h1>{dark? "Dark Mode is On":"Light Mode is On"}</h1>
        <p style ={{fontSize:"20px"}}>Want to see some magic</p>
      </div> 
    </div>
  );
}

export default Apple;
