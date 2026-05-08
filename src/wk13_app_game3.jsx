import { createContext, useContext } from "react";
import { useState, useEffect } from 'react'
import rand from './wk13_random.jsx'

const NumContext = createContext();

function Board()
{
    var [num1, setNum1] = useState('0')
    var [num2, setNum2] = useState('0')
    var [wins, setWins] = useState('')
    var [score, setScore] = useState([0,0])
    
    useEffect(() => 
    {
       var win;
       if (num1>num2) {win = "Player 1 wins";}
       else if (num2>num1) {win = "Player 2 wins";}
       else if (num1==0 && num2 == 0) {win="";}
       else win = "It's a tie";
       setWins(win);
	}, [num1, num2]);
    
    useEffect(() => 
    {
       var p1 =  score[0];
       var p2 = score[1];
       if (num1>num2) {p1++}
       else if (num2>num1) {p2++}
       setScore([p1, p2]);
	}, [num1,num2]);
    
    var p1 = score[0];
    var p2 = score[1];
    
    return <>
        <h1>Lucky Numbers</h1>
        <div className='numberBoxes'>
           <span className='box'>{num1}&nbsp;&nbsp;</span>
           <span className='box'>&nbsp;&nbsp;{num2}</span>
           <div><button onClick={()=>{setNum1(rand(10));setNum2(rand(10))}}>Play!</button></div>
        </div><br />
        <div className='winNotice'>{wins}</div>
        <div className='scoreboard'><h2><br />Scores!</h2>
            <div>
                <div>Player1<br/>{p1}</div>
                <div>Player2<br/>{p2}</div> 
            </div>
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