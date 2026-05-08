import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



    function Employee2 ({userID, children})
    {
        var pick = () => alert("You picked: " + children)
       return  <div className= 'emp'>
                    <p>{children}</p>
                    <p>ID: {userID}</p>
                    <button onClick = {pick}>Pick {children}</button></div> 
    }
function App() {


  const [count, setCount] = useState(0)


  return (
    <>
    <h1>Employees</h1>
<Employee2 userID='101'>Sally</Employee2> <Employee2 userID='102'>Sam</Employee2>
    </>
  )
}

export default App
