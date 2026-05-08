import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import rand from './wk13_random.jsx'
import './guess.css'
// links set up the links the the router calls


function Header()
{
	return (
	<div className='header'>
	<Nav />
	</div>
	)
}

function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Game</Link></li>
		<li><Link to="/settings">Settings</Link></li>
        <li><Link to="/stats">Stats</Link></li>
		</ul>
	);
}

//props would be (props) not ({}}) but would have to add props.variable name.  6 {one} half.adozen too many details! game logic - initialize the variables that are only used here)
// else if checks to see if there are still remaining guesses before continuing the conditional and uses the $
function Game({maxNumber, maxGuesses, answer, setAnswer})  
{
           
    const [guess, setGuess] = useState('');
    const[message, setMessage] = useState('');
    const [guessesLeft, setGuessesLeft] = useState(maxGuesses);
    const [gameOver, setGameOver] = useState(false)
    


    function checkGuess() {
        const numGuess = Number(guess)
        if (guessesLeft <=0) {
            return;
        }
        if (numGuess === answer ) {
            setMessage("Who are you, Nostradmus?");
            setGameOver(true)
        }
        else if (numGuess < answer ) {
            const remaining = guessesLeft -1;

            setGuessesLeft(remaining);
            if (remaining <= 0) {
                setMessage("Wah-Wah!  The answer was ${answer}");
                setGameOver(true);

            }
            else
            {

            setMessage("Too low, jo.  Try again");
            setGuessesLeft(guessesLeft - 1);
        }
    }
        else  {
            if (remaining <= 0) {
                setMessage("Wah-Wah!  The answer was ${answer}");
                setGameOver(true);
            }
            setMessage("Too high. Try again");
            setGuessesLeft(guessesLeft - 1);
        }
   //     alert("Checking Guess: " + guess);


    }

 
	return (
		<div className='page'>
		<Header />
		<h1>Guess the number</h1>
		<p>Are you a mindreader? Guess the number I am thinking of between 1 and {maxNumber}</p> 
        <p>Guesses allowed:  {maxGuesses} </p>
  
          <input
    type="number"
    value={guess}
    onChange={(e) =>
        setGuess((e.target.value))
}
   

		/>
       

 <button onClick={checkGuess}>
        Guess
        </button>
        <p>{message}</p>
        <p> Guesses left: {guessesLeft} </p>

         <p> DEBUG ANSWER: {answer}</p>
              <p> DEBUG guess: {guess}</p>
        </div>
	)

}
// using {destructured} instead of props, resetting state in MyApp through (e)vent in input buttons to (Number(e) converts the string to a number - could hve done Number(guess) later - confusing)
function Settings ({ 
    maxNumber,
    setMaxNumber,
    maxGuesses,
    setMaxGuesses 
})
{

	return (
	<div className='header'>
	<Header />
    <h1>Settings</h1>
    <p>Set the maximum number: </p>
    <input
    type="number"
    value={maxNumber}
    onChange={(e) =>
        setMaxNumber(Number(e.target.value))
}
/>
<p>Maximum Guesses</p>
 <input
    type="number"
    value={maxGuesses}
    onChange={(e) =>
        setMaxGuesses(Number(e.target.value))
}
/>

	</div>
	)
;
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

// creates the shared state of objects and initial state, sets up the routes/layout and passes data to components, either through props (Game(props) return {props.maxNumber} or destructured variables Game ({maxNumber}) return {maxNumber}
function MyApp() 
{
      
    const [maxNumber, setMaxNumber] = useState('');
         
    const [maxGuesses, setMaxGuesses] = useState('');
   const [answer, setAnswer] =useState(rand(10));
   
    const [wins, setWins] = useState([0]);
    const [totalWinningGuesses, setTotalWinningGuesses] = useState(0);
  //  const[gameOver, setGameOver] =state(false);
//This is how the components are rendered onto the page 
	return (
		<Router>
			<h1>Welcome to "Are you a <em>Mind Reader</em>?"</h1>
            <Routes>
                <Route path="/" element={<Game 
                maxNumber={maxNumber}
                maxGuesses={maxGuesses}
                answer={answer}
                setAnswer= {setAnswer}
                wins={wins}
                setWins ={setWins}
                totalWinningGuesses={totalWinningGuesses}
                setTotalWinningGuesses ={setTotalWinningGuesses}
            
                />} />

                <Route path="/settings" element={<Settings 
                maxNumber={maxNumber}
                setMaxNumber = {setMaxNumber}
                maxGuesses={maxGuesses}
                setMaxGuesses={setMaxGuesses}
                
                />} />
                <Route path="/stats" element={<Stats />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
		</Router>
	);
}

    

export default MyApp