
//React Hook to remember State / update when state changes
import { useState } from "react"; 

import './App.css' 

//opening state = city, setCity = update stte, "" initial state
// state update = 2nd array
function MyApp() { 
  const  [city, setCity] =useState("");
  const  [cities, setCities] = useState(["Seattle", "Santa Cruz"]);
  
//Event handler (onClick fx) gives alert with city, creates a new array with existing ... cities + new city and resets form to empty
//onChnage runs each time the user inputs text, e captures the event object / e.target = input element /  e.target.value = the actual value (city), which setCity adds to UI
// map uses the key to track cities and display in ul li
  function addCity(){

     alert("Adding a city: " + city);
    setCities([...cities, city]);
    setCity("");
  }
    return (
     <>
      <h1>Cities Demo</h1>

  
    <form>
      <label>
      Adding a city?
      <input type="text" 
       value={city}
      onChange={(e) => setCity(e.target.value)} />
      </label>

      <input type="button" value="Add City" onClick={addCity}/>
      <br /><br />
     <hr className='myhr' />
    </form>

    <ul>
      {cities.map((c,i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
    </>
    );
  }
  

      
      export default MyApp