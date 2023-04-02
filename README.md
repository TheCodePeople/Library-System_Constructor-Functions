## Library System - Constructor Functions
Your task is to write the program using functional object constructors in JavaScript.    
The program should allow for the creation of a library object with books and patrons, the addition and removal of books from the library, and the checking in and out of books by patrons.

## Instructions

**Step 1**: Create a `Patron` object constructor that has a "name" and "id".

**Step 2**: Create a `Library` object constructor that takes two parameters: the "name" and an array of book objects called "books".

**Step 3**: Create a `Book` object constructor that has a "title", "author", "id", and "status" properties.

**Step 4**: Create a `BookStatus` object constructor that takes two parameters: "checkedOut" (default false) and the "patron" object (default null).

**Step 5**: Add a method called `addBook` to the Library object constructor that allows a new book to be added to the library.

**Step 6**: Add a method called `removeBook` to the Library object constructor that allows a book to be removed from the library using the book id.

**Step 7**: Add a method called `getBookById` to the Library object constructor that gets the book by its id.

**Step 8**: Add a method called `checkOutBook` to the Library object constructor that allows a book to be checked out by a patron.   
The method should take two parameters: the "id" of the book and the "patron" object.   
If the book exists in the library and is not currently checked out, it should be marked as checked out and associated with the patron object.

**Step 9**: Add a method called `checkInBook` to the Library object constructor that allows a book to be checked in by a patron. The method should take one parameter, the "id" of the book.   
If the book exists in the library and is currently checked out, it should be marked as checked in and dissociated from the patron object.

After you're done with the steps, create a new `library` object and use the `books` array provided in `app.js`.  

- Use the `addBook` method to add couple of new books.
- Use the `removeBook` method to remove a book.
- Create a new `Patron` object.
- Use the `checkOutBook` method for the patron to check out a book. 
- Use the `getBookById` to console log the book that was checked out by the patron.
- Use the `checkInBook` method to check the book back into the library.
- Use the `getBookById` again to console log the book that was checked out by the patron.

```
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
```
**Output**:

```
bookTitle: 1984, checkedOutBy: John Smith

bookTitle: 1984, checkedOut: false
```