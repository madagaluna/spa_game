import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import rand from './wk13_random.jsx'
import './guess.css'

function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Game</Link></li>
		<li><Link to="/about">Settings</Link></li>
        <li><Link to="/stats">Stats</Link></li>
		</ul>
	);
}


function Header()
{
	return (
	<div className='header'>
	<Nav />
	</div>
	)
}



function Game(props)  /* using props to destructure max.number from MyApp */
{
 
	return (
		<div className='page'>
		<Header />
		<h1>Guess the number</h1>
		<p>Are you a mindreader? Guess the number I am thinking of between 1 and {props.maxNumber}</p> 
		</div>
	)
}

function Settings()
{
	return (
	<div className='header'>
	<Header />
    <h1>Settings</h1>
	</div>
	)
}


function Stats()
{
	return (
	<div className='header'>
	<Header />
    <h1>Stats</h1>
	</div>
	)
}

function NotFound()
{
	return (
	<div className='header'>
	<Header />
    <h1>Oh YES!</h1>
		<p>You have stumbled on a secret page!  Please choose again.</p>
	</div>
	)
}


function MyApp()
{
      
    const [maxNumber, setMaxNumber] = useState(100);     
    const [maxGuesses, setMaxGuesses] = useState(5);
   const [answer, setAnswer] =useState(rand(100));
   const[message, setMessage] = useState('');
    var [wins, setWins] = useState([0]);
    const [totalWinningGuesses, setTotalWinningGuesses] = useState(0);
  //  const[gameOver, setGameOver] =state(false);

	return (
		<Router>
			<h1>Welcome to "Are you a <em>Mind Reader</em>?"</h1> 
            <Routes>
                <Route path="/" element={<Game 
                maxNumber={maxNumber}
                answer= {answer}
                wins={wins}
                setWins ={setWins}
                totalWinningGuesses={totalWinningGuesses}
                setTotalWinningGuesses ={setTotalWinningGuesses}
                
                
                
                />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
		</Router>
	);
}

    

export default MyApp