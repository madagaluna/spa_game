
//React Hook to remember State / update when state changes
import { useState } from "react"; 

import './App.css' 

//opening state = city, setCity = update stte, "" initial state
// state update = 2nd array
function MyApp2() { 
  const  [city, setCity] =useState("");
  const  [cities, setCities] = useState(["SEATTLE", "SANTA CRUZ"]);
  
//Event handler (onClick fx) gives alert with city, creates a new array with existing ... cities + new city and resets form to empty
//onChnage runs each time the user inputs text, e captures the event object / e.target = input element /  e.target.value = the actual value (city), which setCity adds to UI
// map uses the key to track cities and display in ul li


    function addCity() {
  const newCity = city.trim().toUpperCase();

  // check if it already exists
  if (cities.includes(newCity)) {
    alert("City already exists: " + newCity);
    return; // stop here
  }

  alert("Adding a city: " + newCity);

  setCities(
    [...cities, newCity].sort((a, b) => a.localeCompare(b))
  );

  setCity("");
}


function removeCity(cityToRemove) {
  const ok = confirm("Remove city: " + cityToRemove + "?");

  if (!ok) {
    return;
  }

  setCities(cities.filter((c) => c !== cityToRemove));
}

    return (
     <>
      <h1>Cities Demo</h1>

  
    <form>
      <label>
      Adding a city? 
      < input type="text" 
       value={city}
      onChange={(e) => setCity(e.target.value)} />
      </label>

      <input type="button" value="Add City" onClick={addCity}/>
      <br /><br />
     <hr className='myhr' />
    </form>

    <ul>
  {cities.map((c, i) => (
    <li key={i}>
      {c}
      <button onClick={() => removeCity(c)} style={{ marginLeft: "10px" }}>Delete</button>
    </li>
  ))}
</ul>

    </>
    );
  }
  
      export default MyApp2