
const bookClick = (props) => {
    console.log(props)
}

export const Book = (props) => {
    console.log(props)
    const {title, author, image} = props;
    return <article className="book" onMouseOver={()=>{
        // console.log("Mouse Over")
    }}>
        <img src={image} alt="Harry Potter Complete Box Set"/>
        {/* Inline styling: camelCase, JS Object, overrides all other stylings */}
        <h3 style={{color:'#617d98', fontSize:'16pt', marginTop:'0.25rem'}}>{title}</h3>
        <p>{author}</p>
        <button onClick={()=>bookClick(author)}>Log Author</button>
    </article>
}

/*
Ways to use props:
1. (props) -> {props.title}
2. (props) -> const {title, author, image} = props; {title} (destructuring)
3. ({title, author, image}) -> {title}
 */
