import {useTitle} from "./cust_hook";
import {useState} from "react"


function Title()
{
    var [title,tbox] = useTitle();


    return (
        <>
        <h1>{title}</h1>
        Here is additional content.
        <br />
        {tbox}
        </>
    )
}


function MyApp()
{
    return (
            <>
            <Title />
            </>
        )
    }

export default MyApp