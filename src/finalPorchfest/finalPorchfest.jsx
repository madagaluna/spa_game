import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './final_porchfest.css'


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


function Home()
{
    return
}           
    

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


function MyApp() 
{
      

	return (
		<Router>
			<h1>"Welcome to  <em>Belmont Porchfest</em>?"</h1>
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