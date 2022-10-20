import React from "react";
import { books } from "./books";
import { Book } from "./book";

// CSS
import "../index.css";
import { useContext } from "react";
import { BookContext } from "../App";

export default function Booklist() {
  const [booklist, setBookList] = useContext(BookContext);

  return (
    <section className="booklist">
      {booklist.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
