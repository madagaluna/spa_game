//custom hook
import {useState} from "react"

export const useTitle= () =>
{
    const [title, setTitle] = useState("Welcome");
    var tbox = 
            <div>Enter New Title: <input type ='text' name='title' 
                                     onChange={(e)=>setTitle(e.target.value)} />
            </div>
       
    return [title, tbox];    
}
