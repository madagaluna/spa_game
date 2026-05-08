import {useState} from "react";
import rand from './wk13_random.jsx'


function Board()
{
    var [num1, setNum1] = useState('0')
    var [num2, setNum2] = useState('0')
    
    return <>
        <h1>Lucky Numbers</h1>
        <div className='numberBoxes'>
           <span className='box'>{num1}&nbsp;&nbsp;</span>
           <span className='box'>&nbsp;&nbsp;{num2}</span>
        </div>
        </>
}


function MyApp()
{
    return (
            <>
            <Board />
            </>
        )
    }

export default MyApp