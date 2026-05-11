import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './finalPorchfest.css'


// ------------------------------------------------------------------------- DATA object of arrays initializing bands ---
const initialBands = [
  {
    name: "Fool’s Gold",
    type: "alt rock",
    time: "12:30 PM",
    location: "122 Cross Street",
	 description: "We are a band of teenagers that want to spread the music of the Beatles and their musicality to our community",
    image: "images/Fools gold.png",

  },
  {
    name: "Tyler and Jamie",
    type: "rock n roll",
    time: "11:00 AM",
    location: "122 Cross Street",
	  description: "Tyler Tonomura-MacDonald AKA Woodrot, (formerly of Midnight Donut Cult,) and James MacDonald are a father",
    image: "images/Jaime and Tyler.jpeg",

  },
  {
    name: "Blindsided",
    type: "punk",
    time: "5:00 PM",
    location: "134 Dalton Road",
	 description: "Blindsided is a band from the greater Boston area that plays funk, fusion, and some rock. We are new to the Boston music scene, and are excited to start making waves.",
    image: "images/Blindside.jpg",
 
  },
  {
    name: "Anemoia",
    type: "alt rock",
    time: "3:30 PM",
    location: "122 Cross Street",
	 description: "Indie rock with harmonies",
    image: "images/Anemoia.jpeg",

  },
  {
    name: "PaperJam",
    type: "rock n roll",
    time: "2:00 PM",
    location: "134 Dalton Road",
	description: "'Mature' (haha) folks playing blues, classic rock and country: Creedence Clearwater, Stevie Ray Vaughan, Elvis Presley, Rolling Stones, Johnny Rivers, Johnny Cash, ZZ Top etc.",
    image: "images/paperjam.png",

  },
  {
    name: "Redwire",
    type: "brass",
    time: "4:00 PM",
    location: "134 Dalton Road",
	 description: "Redwire is a Newton-based teen hard rock band with originals and some covers @redwire__ ",
    image: "images/Redwire logo.jpg",
//	

  },
];
// ------------------------------------------------------------------------- HEADER ---
function Header()
{
	return (
	<div className='header'>
        <h1>Belmont Porchfest 2026</h1>
	<Nav />
	</div>
	)
}
// --------------------------------------------------------------------------- NAV ---
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
// --------------------------------------------------------------------------- PAGES ---
// --------------------------------------------------------------------------- HOME ---
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
<h3> Check out some of our performers on 
	
	
	<a href="https://www.facebook.com/BelmontPorchfest/" 
	target="_blank"> FACEBOOK </a>
	 and 
	 <a href="https://www.instagram.com/belmontporchfest/" 
	 target="_blank"> INSTAGRAM </a>.
	
	
	</h3>
<h4> Thank you to everyone who played, hosted, volunteered, and celebrated. You made Porchfest 2025 unforgettable.<br></br><br></br></h4>

<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/X4uBCUWVXpk?si=pC-_nN8jk6bj0OyE"
title="A Porchfest Journey"
allowFullScreen></iframe>

<h4>Although Porchfest is free, there are costs associated with making it safe, fun, and comfortable.
Please consider donating:
<br></br> </h4> <h5>BE OUR ROCKSTAR! </h5><h2>PayPal</h2>


    </div>
	);
}           



// --------------------------------------------------------------------------- PAGES / REGISTER / SET STATE

function Register({addBand}) { //still have to clear form

	const [name, setName] = useState('');  // don't need to be available elsewhere cuz they are just in the registration form. tge real bands list is in addBand in myApp 
	const[type, setType] = useState("");
	const[time, setTime] = useState("");
	const[location, setLocation] = useState("");
	const[description, setDescription] = useState("");

// --------------------------------------------------------------------------- PAGES / REGISTER 
// --------------------------------------------------------------------------- Event HANDLER	

	function handleSubmit(e) {
		e.preventDefault(); //so the page doesn't refresh

		const newBand = { //collects the new (temp) data
			name: name,
			type: type,
			time: time,
			location: location,
			description: description,
		};
		alert("adding band");
		addBand(newBand);  //sends it back to myApp
	}

  // --------------------------------------------------------------------------- PAGES / REGISTER 
// --------------------------------------------------------------------------- FORM
  return (
    <div className="page register">
		<Header />

      <h1>Registration</h1>


      <div id="centerForm">
	  <form className="form" onSubmit={handleSubmit}>


		<div className="labelBtnGroup">
		<label>Performer Name 
		<input
		value={name}
		onChange={(e) => setName(e.target.value)}
		/>			
</label>
	
	
</div>

<div className="labelBtnGroup">
		<label>Type of Music
			<input
		value={type}
		onChange={(e) => setType(e.target.value)}
		/>
</label>
			
</div>

<div className="labelBtnGroup">
	<label>Performance Time
					<input
		value={time}
		onChange={(e) => setTime(e.target.value)}
		/>
			</label>
			
</div>

<div className="labelBtnGroup">
	<label>Location
					<input
		value={location}
		onChange={(e) => setLocation(e.target.value)}
		/>
			</label>
		
</div>

<div className="labelBtnGroup">
	<label>Description
					<input
		value={description}
		onChange={(e) => setDescription(e.target.value)}
		/>
			</label>			
			</div>
			

<button type="submit">
				Add Band
			</button>
	  </form>
	  </div>
   
    </div>
  );
}

// --------------------------------------------------------------------------- PAGES /BANDS ---



function Bands({bands}) {

  
  return (
    <div className="page bands">
      <Header />
	 
      <h1>Bands</h1>

	  <div className="bandsLayout">

		{bands.map((band, i) => (

		<div className="bandCard" key={i}>
			

		<h2>{band.name}</h2>
		<p>
<strong>Type: </strong>{band.type}
		</p>
		<p>
<strong>Time: </strong>{band.time}
		</p>
		<p>
<strong>Location: </strong>{band.location}
		</p>
		<p>
<strong>Descripton: </strong>{band.description}
		</p>
		</div>
				)
			)
		}

	  </div>
   
    </div>
  );
}

// --------------------------------------------------------------------------- PAGES /NOT FOUND ---

function NotFound()
{
	return (
	<div className='page NotFound'>
	
	 
    <h1>Why, Hello There!</h1>
		<p>You have stumbled upon a secret page! <br></br> Please choose one of the following doors:</p>
		
		<h5>The second <a href="https://youtu.be/JWWeaJA3JRA?si=CBFF02Qfmpc9jMLW" 
	target="_blank"> Beale Text </a> requires a book cipher. <br></br><br></br>The <strong>key</strong> text: <br></br> 
	<a href="https://books.google.com/books?id=BGm-xOfDaPoC&q=Les+Propheties#v=onepage&q=Les%20Propheties&f=false" 
	target="_blank"><em> Les Prophéties, by Nostradamus </em></a> <br></br><br></br>
	<strong>The rule is simple:</strong>
	<br></br> Let n be the ciphertext number and locate the n‑th word in prophicies, calling it wₙ. <br></br>
	Then compute k = n mod 3 to determine which letter to extract — first, second, or last, wrapping when needed. <br></br>
	The resulting letters form the plaintext, with numbers and punctuation handled through a small set of digraphs. <br></br><br></br> 
	 GOOD LUCK TREASURE HUNTERS!
	 </h5>
	<div className="door-nav">
		<Nav />
		</div>
	</div>
	)
}

// --------------------------------------------------------------------------- MYAPP ---
// ---------------------------------------------------------------------------  ---

//
 // MyApp  shares bands with bands component for grid card - coming,
 // fx addband adds new band object to ...bands array then gets passed into register as a fx
//	   register calls this fx, add band, addBand updates bands in MyApp so they are available to other components, like bands page where they are displayed.


function MyApp() 
{
      const [bands, setBands] = useState (
		initialBands);
	
	  function addBand(newBand) {
		setBands([...bands, newBands]);  
	  }  

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

                <Route path="/register" 
				element={<Register addBand={addBand}
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