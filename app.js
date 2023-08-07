function Library(name, books)
{
this.name=name;
this.books = [...books];
this.addBook=function(title,author)
{
  console.log("__________ADD__________");
  let new_book;
  let id;
  let status;
  id=this.books[this.books.length-1].id+1;
  status=new BookStatus();
  new_book=new Book(title,author,id,status);
  this.books.push(new_book);
  console.log("the book ((("+new_book.title+"))) Aadded to  the library ");
  console.log("_______________________");
}
this.checkOutBook = function(id, patron)
{
  console.log("__________CHECK OUT__________");
  let test_id=false;
  let test_book;
  test_book = this.books.find(function(v){
    return v.id == id;
  });
  if(test_book != undefined)
  {
   if(test_book.status.checkOut == false)
   {
     test_book.status.checkOut=true;
     test_book.status.patron = {...patron};
     // test_book.status.patron.id = patron.id;
     console.log("the book ((("+test_book.title+"))) cheked out from the library , by ((("+patron.name+")))");
    }else
    {
      console.log("Sooory!!! this book ((("+test_book.title+" ))) can not checked out , becuase the books is checked out");
    }
  }else
  {
    console.log("Sooory!!! the book with id : ((("+id+" ))) can not checked out , becuase the books is removed");
  }
  console.log("__________________________");
}
this.removeBook=function(id)
{
  console.log("__________REMOVE__________");
  let test_book;
  test_book=this.books.find(function(v){
    return v.id==id;
  });
  if(test_book)
  {
    this.books = this.books.filter(function(v){
      return v.id !== id;
   });
   console.log("the book ((("+test_book.title+" ))) removed from library");
  }else
  {
    console.log("the book with id : ((("+id+" ))) can not removed , becuase it is unavailable");
  }
  console.log("__________________________");
}
this.checkIn=function(id)
{
  let test_book;
  test_book = this.books.find(function(v){
    return v.id==id;
  });
  if(test_book)
  {
    test_book.status.checkOut=false;
    test_book.status.patron=null;
    console.log("the book ((( "+test_book.title+" ))) check in to library");

  }
}
this.getBookById=function(id)
{
  let test_book;
  test_book=this.books.find(function(v){
    return v.id == id;
  });
  return test_book;
}
this.display=function()
{
  console.log("__________________________DISPLAY__________________________");
  for(let i=0;i<this.books.length;++i)
  {
    console.log("__________________________"+this.books[i].id+"__________________________");
    for(let p in this.books[i])
    {
      if(p=="status" && this.books[i][p].patron!=null)
      {
        console.log("status-check out = "+this.books[i][p].checkOut);
        console.log("status-patron = "+this.books[i][p].patron.name);
      }else
      {
        console.log(p + " = "+this.books[i][p]);
      }
    }
    console.log("______________________________________________________");
  }
  console.log("___________________________________________________________");
}
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function Book(title, author, id, status)
{
this.title=title;
this.author=author;
this.id=id;
this.status=status;
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function Patron(name, id)
{
this.name=name;
this.id=id;
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function BookStatus(checkOut=false, patron=null)
{
this.checkOut=checkOut;
this.patron=patron;
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const books = [
  { author: "J.D. Salinger", title: "The Catcher in the Rye", id: 1,status : new BookStatus() },
  { author: "Harper Lee", title: "To Kill a Mockingbird", id: 2 ,status : new BookStatus()},
  { author: "George Orwell", title: "1984", id: 3,status : new BookStatus() },
  { author: "F. Scott Fitzgerald", title: "The Great Gatsby", id: 4,status : new BookStatus() },
  { author: "Jane Austen", title: "Pride and Prejudice", id: 5,status : new BookStatus() },
  {author: "J.K. Rowling",title: "Harry Potter and the Philosopher's Stone",id: 6,status : new BookStatus()},
  { author: "J.R.R. Tolkien", title: "The Hobbit", id: 7,status : new BookStatus() },
  { author: "George Orwell", title: "The Lord of the Rings", id: 8 ,status : new BookStatus()},
  { author: "Aldous Huxley", title: "Animal Farm", id: 9 ,status : new BookStatus()},
  { author: "Aldous Huxley", title: "Brave New World", id: 10,status : new BookStatus() },
];

let library1 = new Library("Abbas Alnajafy Library",books);
let patron1 = new Patron("Abbas Abd Alhusain",1);
let patron2 = new Patron("Patron-2",2);
let patron3 = new Patron("Patron-3",3);
let patron4 = new Patron("Patron-4",4);
let patron5 = new Patron("Patron-5",5);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
console.log(library1.books);
library1.addBook( "Author-11" , "php and myqsl"  );
library1.addBook( "Author-12" , "js essential" );
library1.addBook( "Author-13" , "python language" );
library1.addBook( "Author-14" , "python language" );
library1.addBook( "Author-15" , "python language" );
library1.removeBook(1);
library1.removeBook(100);
library1.removeBook(12);
library1.removeBook(120);
library1.checkOutBook(1,patron1);
library1.checkOutBook(5,patron2);
library1.checkOutBook(11,patron2);
library1.checkOutBook(2,patron3);
library1.checkOutBook(5,patron4);
library1.checkOutBook(10,patron5);
library1.checkIn(1);
library1.checkIn(5);
library1.checkIn(11);
library1.display();
