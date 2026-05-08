import {useState} from "react";
import rand from './wk13_random.jsx'


function Board()
{
    var number1 = rand(5)
    var number2 = 8
    return <>
        <h1>Lucky Numbers</h1>
        <div className='numberBoxes'>
           <div className='box'>{number1}</div>
           <div className='box'>{number2}</div>
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