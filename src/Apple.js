import React, { useState } from 'react';
import './App.css';

function Apple() {
  const [dark ,setdark] = useState(false)

 

  return (
    <div className={dark?"App dark-mode" : "App"}>
      <div className= "nav">
        <label class ="switch">
          <input 
          type ="checkbox"
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
