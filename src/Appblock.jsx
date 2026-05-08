import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



      //-------------------------------DATA

      //array of objects containing color and number  - setting up for the color class with block - mindblown!
      const nums = [
        { num: 7, color: "black" },
        { num: 8, color: "blue" },
        { num: 9, color: "salmon" },
        { num: 4, color: "mustard" },
        { num: 5, color: "black" },
        { num: 6, color: "blue" },
        { num: 1, color: "salmon" },
        { num: 2, color: "mustard" },
        { num: 3, color: "black" },
      ];

      //-------------------------------component
      //  each Block = a color/ num object with a className derived from css "block " + color
      // App is the wrapper, maps the data into block components into the css frame and requires a unique key/index with the num and color passed as props
      function Block({ num, color }) {
        const handleClick = () => alert(num);

        return (
          <div className={"block " + color} onClick={handleClick}>
            {num}
          </div>
        );
      }

      function App() {
        return (
          <div className="frame">
            {nums.map((b, idx) => (
              <Block key={idx} num={b.num} color={b.color} />
            ))}
          </div>
        );
      }

      //-------------------------------render


export default App
