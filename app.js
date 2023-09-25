const books = [
  { author: "J.D. Salinger", title: "The Catcher in the Rye", id: 1 },
  { author: "Harper Lee", title: "To Kill a Mockingbird", id: 2 },
  { author: "George Orwell", title: "1984", id: 3 },
  { author: "F. Scott Fitzgerald", title: "The Great Gatsby", id: 4 },
  { author: "Jane Austen", title: "Pride and Prejudice", id: 5 },
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    id: 6,
  },
  { author: "J.R.R. Tolkien", title: "The Hobbit", id: 7 },
  { author: "George Orwell", title: "The Lord of the Rings", id: 8 },
  { author: "Aldous Huxley", title: "Animal Farm", id: 9 },
  { author: "Aldous Huxley", title: "Brave New World", id: 10 },
];
function BookStatus(checkedOut = false, patron = null) {
  this.checkedOut = checkedOut;
  this.patron = patron;
}

function Book(title, author, id, status) {
  this.title = title;
  this.author = author;
  this.id = id;
  this.status = status;
}

function Patron(name, id) {
  this.name = name;
  this.id = id;
}

function Library(name, books) {
  this.name = name;
  this.books = books;

  this.addBook = function(title, author, id) {
    const newBook = new Book(title, author, id, new BookStatus());
    this.books.push(newBook);
  };

  this.removeBook = function(id) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
  };

  this.getBookById = function(id) {
    return this.books.find((book) => book.id === id);
  };

this.checkOutBook = function(bookId, patron) {
  const book = this.getBookById(bookId);
  if (!book) {
    console.log("Book not found.");
    return;
  }

  if (book.status && book.status.checkedOut) {
    console.log("Book is already checked out.");
    return;
  }

  book.status = new BookStatus(true, patron);
  console.log(`Checked out: ${book.title} by ${patron.name}`);
};


  this.checkInBook = function(bookId) {
    const book = this.getBookById(bookId);
    if (book && book.status?.checkedOut) {
      book.status.checkedOut = false;
      book.status.patron = null;
    }
  };
}

const library = new Library("Central Library", books);

library.addBook("The Alchemist", "Paulo Coelho", 11);
library.addBook("The Da Vinci Code", "Dan Brown", 12);

library.removeBook(5);

const patron = new Patron("John Smith", 1);

library.checkOutBook(3, patron);

const checkedOutBook = library.getBookById(3);
console.log(
  `bookTitle: ${checkedOutBook.title}, checkedOutBy: ${checkedOutBook.status?.patron?.name}`
);

library.checkInBook(3);

const checkedInBook = library.getBookById(3);
console.log(
  `bookTitle: ${checkedInBook.title}, checkedOut: ${checkedInBook.status?.checkedOut}`
);
