import "./Books.css";
import books from "./booksJson";
import { useState } from "react";


const Books = () => {
  const [currentPart, setCurrentPart] = useState(1);
  return (<>
    <div className="suggCont">
      {books.map((book, index) => (
        (index >= ((currentPart * 15) - 15) && index < (currentPart * 15)) &&
        <div key={index}>
          <div className="suggCoverCont">
            <img alt={book.title} src={book.image} />
          </div>
          <div className="suggTxtCont">
            <span className="title">{book.title}</span>
            <span className="suggAuth">{book.author}</span>
            <div>
              <span className="suggYear">{book.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div>
      
    </div>
    </>
  );
};

export default Books;
