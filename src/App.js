import { useEffect, useState } from "react";

const tempBooksData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(function () {
    fetch(`https://simple-books-api.glitch.me/books?type=fiction`).then(
      (data) => console.log(data)
    );
  }, []);

  // console.log(books);
  return (
    <div className="app">
      <div className="header">
        <Logo />
        <Search />
      </div>
      <Container books={books} />
    </div>
  );
}

function Logo() {
  return <h1>Book Store 📚</h1>;
}

function Search() {
  return <input className="input" type="text" placeholder="Search books..." />;
}

function Container({ books }) {
  // const books = tempBooksData;
  return (
    <ul className="container">
      {books.map((book) => (
        <Card book={book} key={book.imdbID} />
      ))}
    </ul>
  );
}

function Card({ book }) {
  return (
    <li className="book">
      <img src={book.Poster} alt={book.Title} />
      <p>{book.Title}</p>
    </li>
  );
}
