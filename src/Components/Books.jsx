import React from "react";
import { listedItems, listedItems2 } from "./book";
function Books() {
  return (
    <div>
      <h2>Favorite books/manga/etc</h2>
      <div className="Books__lists">
        <ul className="Booksandmanga">{listedItems}</ul>
        <ul className="Booksandmanga">{listedItems2}</ul>
      </div>
    </div>
  );
}

export default Books;
