import {Routes, Route, Link, useParams} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './wk13_app_router.css';

function MyRouteApp()
{
	return (
		<Router>
			<h1>The router wraps around the routes to create a multi-view app</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/stuff/:data" element={<Stuff />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
		</Router>
	)
}

function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/stuff/id=['1','2','9','3']=7=9=3">Stuff</Link></li>
		<li><Link to="/contact">Contact</Link></li>
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

function Home()
{
	return (
		<div className='page'>
		<Header />
		<h1>Home</h1>
		Here is some info about the website
		</div>
	)
}

function NotFound()
{
	return (
		<div className='page'>
		<Header />
		<h1>Oh No!</h1>
		You have stumbled on a secret page!  Please choose again.
		</div>
	)
}

function Stuff()
{
	var {data} = useParams();
	var id = data.split('')[2]
	return (
		
		<div className='page'>
		<Header />
		<h1>Stuff</h1>
		This is some stuff about {data}
        <br />
        The id is {id}
            
		</div>
	)
}

function About()
{
	return (
		
		<div className='page'>
		<Header />
		<h1>About</h1>
		Here is some info about the company
		</div>
	)
}


function Contact()
{
	return (
		
		<div className='page'>
		<Header/>
		<h1>Contact</h1>
		Here is the contact info for the company
		</div>
	)
}


function MyApp() {
    
  return (
      <MyRouteApp />
  );
}


export default MyApp;
