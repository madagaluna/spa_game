
//import {answer} from './mymodule.jsx'; for const
import {pi} from './pi.jsx';
import './App.css' 

function MyApp() { 
  var radius = 10
   var area = pi * radius * radius
  
  return ( 
   
     <>
      <h1>Circle Modules</h1>
      <p>The area of the circle is: {area} </p>
       </>
        ) 
      }
      
      export default MyApp