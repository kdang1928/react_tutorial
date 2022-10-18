import { useState } from "react";

export default function UseStateBtnExample() {
  const [title, setTitle] = useState(false);

  const titleChange = () => {
    setTitle(!title);
  };

  return (
    <>
      {title ? <h1>Hello World</h1> : <h1>Book List</h1>}
      <button
        onClick={() => {
          titleChange();
        }}
      >
        Change Title
      </button>
    </>
  );
}
