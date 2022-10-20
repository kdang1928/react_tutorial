import { useRef, useContext } from "react";
import { BookContext } from "../App";

export default function BookFormUseRef() {
  const [booklist, setBookList] = useContext(BookContext);
  const formData = useRef({
    title: "Howl's Moving Castle",
    author: "Diana Wynne Jones",
    image:
      "https://www.foliosociety.com/media/catalog/product/m/v/mvc_book_1.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
  });

  const addBook = (e) => {
    e.preventDefault();
    console.log(formData.current);
    setBookList([...booklist, formData.current]);
  };

  return (
    <div>
      <h1>Add a Book! (uses UseRef)</h1>
      <form>
        {" "}
        {/* alt: can add onSubmit and change button type to submit */}
        <label>Title:</label>
        <input
          placeholder="Title"
          ref={formData.title}
          value={formData.current.title}
        />
        <label>Author:</label>
        <input
          placeholder="Author"
          ref={formData.author}
          value={formData.current.author}
        />
        <label>Image URL:</label>
        <input
          placeholder="Image URL"
          ref={formData.image}
          value={formData.current.image}
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
