const book = {
  name: [
    "Holyland",
    "The Climber",
    "Berserk",
    "AOT(Attack on Titan)",
    "Tokyo Ghoul",
    "Kingdom",
    "Tomodachi Game",
    "Full Metal Alchemist",
    "Naruto",
    "One Piece",
    "Breaker Series",
    "The Seven Deadly Sins",
    "Kuroko no Basket",
    "Seraph of the End",
    "Fairy Tail",
    "Hunter x Hunter",
  ],
  name2: [
    "Demon Slayer",
    "Hells Paradise",
    "The Alchemist",
    "Manual of the warrior of light",
    "Cant hurt me",
    "The richest man in babylon",
    "Ubel blatt",
    "D.Gray-Man",
    "Black Clover",
    "The Promised Neverland",
    "A mind for numbers",
    "Many more books and managa/etc",
  ],
};

const listedItems = book.name.map((item) => <li key={item}>{item}</li>);
const listedItems2 = book.name2.map((item) => <li key={item}>{item}</li>);

export { listedItems, listedItems2 };
