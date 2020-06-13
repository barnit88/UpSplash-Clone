import React, { useState } from 'react';
import './App.css';

function App() {

  const [Value , setValue] = useState(() =>{
    return JSON.parse(window.localStorage.getItem('val'))|| '';
  });
  
  const [results,setresults] = useState([]);
 


  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=Xa--pEpz8taV_-nD5rsHgDknjU7lBSjzDsTyf6gWRCA&query=${Value}&per_page=20&orientation=squarish`)
    .then(data =>data.json())
    .then(data1 =>{
      console.log(data1.results);
      setresults(data1.results);
    })
  }

  const clickvalue = (e) => {
    setValue(e.target.value); 
    window.localStorage.setItem('val' , JSON.stringify(e.target.value));
    
     
  }

  return (
    <div className="App">
      <button onClick={()=>setresults([])}>Clear</button>
      <div className="myDiv">
        <span> Search </span>
        <input style ={{width:"60%"}} 
        type = "text" value={Value} 
        onKeyPress={(e) => {
          if (e.key==='Enter'){
            fetchImages();
          }
          else {
            return null;
          }
        }} 
        onChange ={clickvalue}/>
        <button onClick={fetchImages}>
          Send
        </button>\
        <button  onClick={clickvalue}>
          See
        </button>
      </div>
      <div className="gallery">
        {
          results.map((result) =>{
            return <img className="item" key={result.id} src={result.urls.full} alt={result.alt_description}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
