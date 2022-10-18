import { useState } from "react";

export default function AddBookForm() {
  const [formData, setFormData] = useState();

  return (
    <div>
      <h1>Add a Book!</h1>
      <form>
        <label>Title:</label>
        <input placeholder="Title" />
        <label>Author:</label>
        <input placeholder="Author" />
        <label>Image URL:</label>
        <input placeholder="Image URL" />
        <button onClick={() => {}}>Submit</button>
      </form>
    </div>
  );
}
