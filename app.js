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

function Patron(name, id) {
  this.name = name;
  this.id = id;
}

function Library(name, books) {
  this.name = name;
  this.books = books;

  this.addBook = function (title, author, id) {
    this.books.push({ author, title, id });
  }

  this.removeBook = function (id) {
    this.books = this.books.filter(book => book.id !== id)
  }

  this.getBookById = function (id) {
    return this.books.find(book => book.id === id)
  }

  this.checkOutBook = function (id, patron) {
    const book = this.getBookById(id)
    book.status = new BookStatus(true, patron)
  }

  this.checkInBook = function (id) {
    const book = this.getBookById(id)
    book.status = new BookStatus(false, null)
  }
}

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
  this.status = new BookStatus()
}

function BookStatus(checkedOut = false, patron = null) {
  this.checkedOut = checkedOut;
  this.patron = patron;
}




const library = new Library("Central Library", books);

// Adding new books
library.addBook("The Alchemist", "Paulo Coelho", 11);
library.addBook("The Da Vinci Code", "Dan Brown", 12);

// Removing a book
library.removeBook(5);

// Creating a new patron
const patron = new Patron("John Smith", 1);

// Checking out a book for the patron
library.checkOutBook(3, patron);

// Logging the book checked out by the patron
const checkedOutBook = library.getBookById(3);
console.log(
  `bookTitle: ${checkedOutBook.title}, checkedOutBy: ${checkedOutBook.status.patron.name}`
);

// Checking the book back in
library.checkInBook(3);

// Logging the book checked in by the patron
const checkedInBook = library.getBookById(3);
console.log(
  `bookTitle: ${checkedInBook.title}, checkedOut: ${checkedInBook.status.checkedOut}`
);

