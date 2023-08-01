import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [datos,setDatos] = useState("");

  const handleClick =  () => {
      const url = "https://api.chucknorris.io/jokes/random";
      const solicitud = fetch(url);
        solicitud
        .then(resp => resp.json())
        .then(chiste => {
          setDatos(chiste.value);
        })
        .catch(() => console.log('mal'))

  }

  useEffect( ()=>{
      handleClick();
  }, []);


  return (
   <>
     <h1>Chistes de Chuck Norris:</h1><br />
     <div className="chiste">{datos}</div> <br />
     <div className="button-container">
       <button onClick={handleClick}>Proximo Chiste</button>
     </div>
   </>
  );
}

export default App;
