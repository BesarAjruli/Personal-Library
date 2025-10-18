import "./Books.css";

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$10.35",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
  },
  {
    title: "48 laws of power",
    author: "Robert Greene",
    price: "$75.99",
    image: "https://m.media-amazon.com/images/I/611X8GI7hpL.jpg",
  },
  {
    title: "Rich dad poor dad",
    author: "Robert T. Kiyosaki",
    price: "$15.55",
    image: "https://bookcorner.mk/storage/images/products/18/front.jpg",
  },
  {
    title: "Harry Potter and...",
    author: "J.K. Rowling",
    price: "$69.45",
    image:
      "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408855669.jpg",
  },
];

const Books = () => {
  return (
    <div className="suggCont">
      {books.map((book, index) => (
        <div key={index}>
          <div className="suggCoverCont">
            <img alt={book.title} src={book.image} />
          </div>
          <div className="suggTxtCont">
            <span>{book.title}</span>
            <span className="suggAuth">{book.author}</span>
            <div>
              <span className="suggPrice">{book.price}</span>
              <span className="suggBuy">Buy</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
