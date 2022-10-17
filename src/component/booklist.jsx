import React from "react";

// CSS
import '../index.css'

const books = [
    {
        id: 1,
        title:'Harry Potter Hogwarts Library', 
        author: 'J.K. Rowling', 
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41UjBn+cYtL._SX258_BO1,204,203,200_.jpg'
    },
    {
        id: 2,
        title:'Percy Jackson and the Olympians Box Set', 
        author: 'Rick Riordan', 
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41d3Xl4fSFS._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
        id: 3,
        title:'The Alchemist', 
        author: 'Paul Coelho', 
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51kcX5PpaZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
]

export default function Booklist() {
    return (
        <section className="booklist">
           {books.map((book) => {
            return <Book key={book.id} {...book}/>
           })}
        </section>
    )
}

const Book = (props) => {
    console.log(props)
    const {title, author, image} = props;
    return <article className="book">
        <img src={image} alt="Harry Potter Complete Box Set"/>
        {/* Inline styling: camelCase, JS Object, overrides all other stylings */}
        <h3 style={{color:'#617d98', fontSize:'16pt', marginTop:'0.25rem'}}>{title}</h3>
        <p>{author}</p>
    </article>
}

/*
Ways to use props:
1. (props) -> {props.title}
2. (props) -> const {title, author, image} = props; {title} (destructuring)
3. ({title, author, image}) -> {title}
 */