import { useRef, useContext } from "react";
import { BookContext } from "../App";

export default function BookFormUseRef() {
  const [booklist, setBookList] = useContext(BookContext);
  const formTitle = useRef("Howl's Moving Castle");
  const formAuthor = useRef("Diana Wynne Jones");
  const formImage = useRef(
    "https://www.foliosociety.com/media/catalog/product/m/v/mvc_book_1.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700"
  );

  const addBook = (e) => {
    e.preventDefault();

    const data = {
      title: formTitle.current?.value,
      author: formAuthor.current?.value,
      image: formImage.current?.value,
    };

    setBookList([...booklist, data]);
  };

  return (
    <div>
      <h1>Add a Book! (uses UseRef)</h1>
      <form>
        {" "}
        {/* alt: can add onSubmit and change button type to submit */}
        <label>Title:</label>
        <input placeholder="Title" ref={formTitle} />
        <label>Author:</label>
        <input placeholder="Author" ref={formAuthor} />
        <label>Image URL:</label>
        <input placeholder="Image URL" ref={formImage} />
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
