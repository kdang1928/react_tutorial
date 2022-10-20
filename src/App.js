import { createContext, useState } from "react";
import AddBookForm from "./component/addBookForm";
import Booklist from "./component/booklist";
import UseStateBtnExample from "./component/useStateBtnExample";
import { books } from "./component/books";
import BookFormUseRef from "./component/bookFormUseRef";
// import Greeting from './component/greeting'

export const BookContext = createContext();

function App() {
  const [booklist, setBookList] = useState(books);

  return (
    <>
      {/* <Greeting/> */}
      <UseStateBtnExample />
      <BookContext.Provider value={[booklist, setBookList]}>
        <AddBookForm />
        <BookFormUseRef />
        <Booklist />
      </BookContext.Provider>
    </>
  );
}

export default App;
