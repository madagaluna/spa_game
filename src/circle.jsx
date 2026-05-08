
import {pi} from './pi.jsx';


function Circle ({ diameter }) {
  const radius = diameter /2;
  const area = radius * radius * pi;

  return (
  <>
  <p>{'The circle has a diameter of ' + diameter}</p>
  <p>The area of the circle is  {area}</p>
  </>
  );
}


export default Circle;
  