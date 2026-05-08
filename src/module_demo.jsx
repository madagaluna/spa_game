
//import {answer} from './mymodule.jsx'; for const
import {answer} from './mymodule.jsx';
//import Circle from './circle.jsx';
import './App.css' 
import MyCircle from './mycircle.jsx'

//-------------Cicle component - now local
function Circle(props) {
  const radius = props.diameter /2
  const c = new MyCircle(radius);

  const area = c.area();
  const perimeter = c.perimeter();
   return (
     <>
      <p>The NEW Circle has a diameter of {props.diameter}</p>
      The area is  {area} <br></br>
       The perimeter is {perimeter}
       </>
        ) ;
      }


function MyApp() { 
  
  return (
     <>
      <h1>Module Demo</h1>
      <p>The answer to life the universe and everything is: {answer} </p>
      <Circle diameter = "500000000" />
       </>
        ) 
      }
      
      export default MyApp