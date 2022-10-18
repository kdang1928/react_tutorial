import React from "react";
import { books } from "./books";
import { Book } from "./book";

// CSS
import '../index.css'

export default function Booklist() {
    return (
        <section className="booklist">
           {books.map((book) => {
            return <Book key={book.id} {...book}/>
           })}
        </section>
    )
}