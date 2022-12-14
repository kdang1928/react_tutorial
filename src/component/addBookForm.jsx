import { useState, useContext } from "react";
import { BookContext } from "../App";

export default function AddBookForm() {
  const [booklist, setBookList] = useContext(BookContext);
  const [formData, setFormData] = useState({
    title: "Howl's Moving Castle",
    author: "Diana Wynne Jones",
    image:
      "https://www.foliosociety.com/media/catalog/product/m/v/mvc_book_1.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  });

  const addBook = (e) => {
    e.preventDefault(); // Necessary to prevent refresh that resets change
    setBookList([...booklist, formData]);
  };

  return (
    <div>
      <h1>Add a Book!</h1>
      <form>
        {" "}
        {/* alt: can add onSubmit and change button type to submit */}
        <label>Title:</label>
        <input
          placeholder="Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
        />
        <label>Author:</label>
        <input
          placeholder="Author"
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          value={formData.author}
        />
        <label>Image URL:</label>
        <input
          placeholder="Image URL"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          value={formData.image}
        />
        <button
          onClick={(e) => {
            addBook(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
