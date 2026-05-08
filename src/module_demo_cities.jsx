
import { useState } from "react";

import './App.css' 


function MyApp3() { 
  const cities = ["San Francisco", "Santa Cruz", "Seattle", "Seville"];
  
  return (
     <>
      <h1>Cities Demo</h1>

     <form>
      <select name = "pickCity" id="">
       {cities.map((city, i)=> (
     <option key={i}>{city}</option>
      ))}
     </select>
      </ form>
       </>
        ) 
      }
      
      export default MyApp3