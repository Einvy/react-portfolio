import React from "react";
import { listedItems, listedItems2 } from "./book";
function Books() {
  return (
    <section className="Books" aria-labelledby="books-heading">
      <h2 id="books-heading">Favorite books/manga/etc</h2>
      <div className="Books__lists">
        <ul className="Booksandmanga">{listedItems}</ul>
        <ul className="Booksandmanga">{listedItems2}</ul>
      </div>
    </section>
  );
}

export default Books;
