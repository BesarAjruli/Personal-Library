import "./Books.css";
import books from "./booksJson";

const Books = () => {
  return (
    <div className="suggCont">
      {books.map((book, index) => (
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
  );
};

export default Books;
