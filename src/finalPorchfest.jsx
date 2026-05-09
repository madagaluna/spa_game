import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './finalPorchfest.css'


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
    return(
	   <div className="page">
      <Header />
      <h1>Home Page</h1>
    </div>
	);
}           
    

function Register({addBand}) {

	const [name, setName] = useState('');  // don't need to be available elsewhere  
	const[type, setType] = useState("");

	function handleSubmit(e) {
		e.preventDefault(); //so the page doesn't refresh

		const newBand = {
			name: name,
			type: type,
			time: time,
			location: location,
			description: description,
		};
		addBand(newBand);
	}

  
  return (
    <div className="page">
		<Header />

      <h1>Registration</h1>
      
	  <form onSubmit={handleSubmit}>

		<input
		value={name}
		onChange={(e) => setName(e.target.value)}
		/ >
			<input
		value={type}
		onChange={(e) => setType(e.target.value)}
		/ >
			<button type="submit">
				Add Band
			</button>

	  </form>
   
    </div>
  );
}
//passing in destructured 
function Bands(bands) {

  
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
      const [bands, setBands] = useState ([{
		name: "Fool's Gold",
		type: "alt rock",
		time: "12:30 PM",
		location: "98 Oak Ave",
		Description: "bal bal bla"
	  }]);
	
	  function addBand(newBand) {
		setBands([...bands, newBands]);  //adds new band object to ...bands array then gets passed into register as a fx
	  } // brain breaking MyApp shares bands, register creates new band, register calls this fx, add band, addBand updates bands in MyApp so they are available to other components, like bands page where they are displayed.  CIRCULAR!

	return (
		<Router>
			<h1>"Welcome to  <em>Belmont Porchfest</em>?"</h1>
            <Routes>
                <Route path="/" element={<Home           
            
                />} />

                <Route path="/register" element={<Register 
                  
					addBand={addBand}
                />} />
                <Route path="/bands" element={<Bands
                
				 bands={bands}
                
                />} />
				

                <Route path="*" element={<NotFound />} />
            </Routes>
		</Router>
	);
}

    

export default MyApp