import React from "react";
import { Person, Message} from "./person"
// import ReactDom from 'react-dom'

export default function Greeting() {
    return (
        <> 
        <h1>Welcome to the React Tutorial!</h1>
        <Person></Person>
        <Message></Message>
        </>
       
    )
}

// const ArrowNotationComponent = () => {
//     return <h1>Hello World</h1>
// }

// ReactDom.render(<ArrowNotationComponent/>, document.getElementById('root'))