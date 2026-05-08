import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import rand from './random.jsx'
import './guess.css'
// links set up the links the the router calls


function Header()
{
	return (
	<div className='header'>
        <h1>Belmont Porchfest 2026</h1>
	<Nav />
	</div>
	)
}

function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/register">Register</Link></li>
        <li><Link to="/bands">Bands</Link></li>
		</ul>
	);
}

//props would be (props) not ({}}) but would have to add props.variable name.  6 {one} half.adozen too many details! Home logic - initialize the variables that are only used here)

// || return to prevent additional guesses after solved / out of guesses
//local to Home include: guess, msg, guessesLeft, HomeOver, guessCount  

function Home()
{
    return
}           
    

    


// using {destructured} instead of props, resetting state in MyApp through (e)vent in input buttons to (Number(e) converts the string to a number - could have done Number(guess) later - confusing) 
function register ({ 
    
})
{

	return (
	<div className='header'>
	<Header />
    <h1>Register</h1>
    


	</div>
	)
;
}

function Bands() {

  
  return (
    <div className="page">
      <Header />

      <h1>Bands</h1>
   

    </div>
  );
}



function NotFound()
{
	return (
	<div className='header'>
	<Header />
    <h1>Why, Hello There!</h1>
		<p>You have stumbled on a secret page!  Please choose again.</p>
	</div>
	)
}


// creates the  state of objects and initial state that are given to components 
function MyApp() 
{
      
 
  


//This is how the components are rendered onto the page 
	return (
		<Router>
			<h1>Welcome to "Are you a <em>Belmont Porchfest</em>?"</h1>
            <Routes>
                <Route path="/" element={<Home 
                 



            
            
                />} />

                <Route path="/register" element={<Register 
                
                
                />} />
                <Route path="/bands" element={<Bands
                
               
                
                />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
		</Router>
	);
}

    

export default MyApp