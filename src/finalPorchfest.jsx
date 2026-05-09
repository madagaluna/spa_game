import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './finalPorchfest.css'


// --- DATA ---
const initialBands = [
  {
    name: "Fool’s Gold",
    description: "We are a band of teenagers that want to spread the music of the Beatles and their musicality to our community",
    image: "images/Fools gold.png",
    type: "alt rock",
    time: "Saturday · 12:30 PM",
    location: "122 Cross Street",

  },
  {
    name: "Tyler and Jamie",
    description: "Tyler Tonomura-MacDonald AKA Woodrot, (formerly of Midnight Donut Cult,) and James MacDonald are a father",
    image: "images/Jaime and Tyler.jpeg",
    type: "rock n roll",
    time: "Saturday · 11:00 AM",
    location: "122 Cross Street",

  },
  {
    name: "Blindsided",
    description: "Blindsided is a band from the greater Boston area that plays funk, fusion, and some rock. We are new to the Boston music scene, and are excited to start making waves.",
    image: "images/Blindside.jpg",
    type: "punk",
    time: "Saturday · 5:00 PM",
    location: "134 Dalton Road",
 
  },
  {
    name: "Anemoia",
    description: "Indie rock with harmonies",
    image: "images/Anemoia.jpeg",
    type: "alt rock",
    time: "Saturday · 3:30 PM",
    location: "122 Cross Street",

  },
  {
    name: "PaperJam",
    description: "'Mature' (haha) folks playing blues, classic rock and country: Creedence Clearwater, Stevie Ray Vaughan, Elvis Presley, Rolling Stones, Johnny Rivers, Johnny Cash, ZZ Top etc.",
    image: "images/paperjam.png",
    type: "rock n roll",
    time: "Saturday · 2:00 PM",
    location: "134 Dalton Road",

  },
  {
    name: "Redwire",
    description: "Redwire is a Newton-based teen hard rock band with originals and some covers @redwire__ ",
    image: "images/Redwire logo.jpg",
    type: "brass",
    time: "Saturday · 4:00 PM",
    location: "134 Dalton Road",

  },
];

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

// gave the div two class names cuz I'm too lazy to make ids and it works.
function Home()
{
    return(
	   <div className="page home"> 
      <Header />
      <h1>Home Page</h1>
	  <h2>
		Belmont’s Porchfest is a celebration of community through arts and music performed by your friends and neighbors on porches, in yards, and all around town. Bike to a friend’s house to hear klezmer, wander into a jazz trio down the street, or stumble upon a circus show on someone’s front lawn.
<br></br><br></br>2025 was our biggest Porchfest yet 

<em> featuring 114 performance groups on 71 porches</em></h2>
<h3> Check out some of our performers on FACEBOOK and INSTAGRAM</h3>
<h4> Thank you to everyone who played, hosted, volunteered, and celebrated. You made Porchfest 2025 unforgettable.<br></br><br></br></h4>

<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/X4uBCUWVXpk?si=pC-_nN8jk6bj0OyE"
title="A Porchfest Journey"
allowFullScreen></iframe>

<h4>Although Porchfest is free, there are costs associated with making it safe, fun, and comfortable.
Please consider donating:
PayPal - The safer, easier way to pay online!
via <br></br> </h4> <h5>BE OUR ROCKSTAR! </h5><h2>PayPal</h2>


    </div>
	);
}           
    

function Register({addBand}) {

	const [name, setName] = useState('');  // don't need to be available elsewhere  
	const[type, setType] = useState("");
	const[time, setTime] = useState("");
	const[location, setLocation] = useState("");
	const[description, setDescription] = useState("");
	

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
    <div className="page register">
		<Header />

      <h1>Registration</h1>

      <div id="centerForm">
	  <form className="form" onSubmit={handleSubmit}>


		< div className="labelBtnGroup">
		<label>Performer Name 

		<input
		value={name}
		onChange={(e) => setName(e.target.value)}
		/ >			
</label>
		<button type="submit">
				Add Band
			</button>
	
</div>

< div className="labelBtnGroup">
		<label>Type of Music
			<input
		value={type}
		onChange={(e) => setType(e.target.value)}
		/ >
</label>
			<button type="submit">
				Add Type of Music
			</button>
</div>

< div className="labelBtnGroup">
	<label>Performance Time
					<input
		value={time}
		onChange={(e) => setTime(e.target.value)}
		/ >
			</label>
			<button type="submit">
				Add time
			</button>
</div>

< div className="labelBtnGroup">
	<label>Location
					<input
		value={location}
		onChange={(e) => setLocation(e.target.value)}
		/ >
			</label>
			<button type="submit">
				Add Locaton
			</button>
</div>

< div className="labelBtnGroup">
	<label>Description
					<input
		value={description}
		onChange={(e) => setDescription(e.target.value)}
		/ >
			</label>
			<button type="submit">
				Add Description
			</button>
			</div>
			


	  </form>
	  </div>
   
    </div>
  );
}
//passing in destructured 
function Bands(bands) {

  
  return (
    <div className="page band">
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
			<div className="logoBckGrnd">
			<img
			src="/spa_game/images/porchfestLogo2026.png "
			alt="Belmont Porchfest Logo"
			className="logoImage" />
			</div>
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