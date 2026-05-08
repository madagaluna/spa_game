import { useState } from "react";
import { createContext, useContext } from "react";


function Comp1()
{
    const [myval, setVal] = useState("cow");
    
    
	return (
		<>
            <h1>Use Context Demo</h1>
            <p>In Comp1, the value is: {myval}</p><br/>
            <Comp2 val = {myval} />
                    
        </>
	)
}

function Comp2({val})
{
    
	return (
		<>
            <h2>Hello Comp2!</h2>
            <p>The value is {val}</p>
        </>
	)
}

const myvalContext = createContext();

function Comp1b()
{
    const [myval, setVal] = useState("cow");
    
	return (
		<>
            <h1>Use Context Demo</h1>
            <p>In Comp1, the value is: {myval}</p><br/>

            <myvalContext.Provider value = {myval} > 
                <Comp2b />
            </myvalContext.Provider >
             <div className= "button-group">
            <button 
            
                    onClick={(e)=>
                        {setVal('chicken');}
                            }
                    >
                        
            Chicken
            </button>
             <button style= {{'width':'150px', 'margin': 'auto', 'border': '2px solid purple', 'background-color':'yellow',}}
                    onClick={(e)=>
                        {setVal('monkey');}
                            }
                    >
            monkey
            </button>
            
             <button 
             
                    onClick={(e)=>
                        {setVal('cow');}
                            }
                    >
            cow
            </button>
           </div>            
        </>
	)
}

function Comp2b()
    {
        const val = useContext (myvalContext);
        return (
            <>
                <h2>Hello Comp2!</h2>
               
                <p>The value is changeable. <em>  Now it's a  {val}</em></p>
               
            </>
        )
    }


function MyApp() {
    
  return (
      <Comp1b />
  );
}


export default MyApp;
