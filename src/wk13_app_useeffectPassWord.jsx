import { useState, useEffect } from 'react'


function ValidPW() {
	const [pw, setPW] = useState('');
	const [validLength, setValidLength] = useState(false);
    const [validLetters, setValidLetters] = useState(false);

	const pwHandler = e => {
		setPW(e.target.value);
	};

    useEffect(() => 
    {
		var valid = pw.length >= 8;
		setValidLength(valid);
	}, [pw]);

    useEffect(() => {
		setValidLetters(hasUpper() && hasLower());
	}, [validLength,pw])

    
    const ValidLength = () => {
		return <> 
			{validLength ? <p>Length is valid</p> :<p>Length is not valid</p>}
		</>
	}

    const ValidLetters = () => {
        var s
        if (!validLength) s = ""
        else if (validLetters) s = "Letter criteria is valid"
        else s = "Letter criteria is not valid"
		return <> {s} </>
	}

	
	const ShowValid = () =>
		<>
			<br />
			Password Criteria
            <ValidLength />
            <ValidLetters />
		</>
    
    const isUpperCase = (c)=>c == c.toUpperCase()
    
    const isLowerCase = (c)=>c == c.toLowerCase()
    
    const hasUpper = () => pw.split('').reduce((valid, i) =>
		(valid || isUpperCase(i)), false)
    
	const hasLower = () => pw.split('').reduce((valid, i) =>
		(valid || isLowerCase(i)), false)

	const hasNumber = () => pw.split('').reduce(((valid, i) =>
		(valid || !isNaN(i))), false);

	return (
		<div style={{ margin: '20px' }}>
			<hr />
			<h2>Get Valid Password</h2>
            <form >
				<div>A valid password is at least 8 characters,1 upper case,1 lower case</div>
				<label htmlFor="input">Password</label><br />
				<input type="text" id="input" onChange={pwHandler} 
                            style={{ height: '24px' }} />
			</form>
            <ShowValid />
		</div>
        
	);  //end return
}

function MyApp() {

   return (
        <>
          <ValidPW />
        </>
  )
}

export default MyApp;

