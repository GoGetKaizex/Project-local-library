function findAuthorById(authors, id) {
 let finalAuthor = authors.find((author) => author.id === id);
 return finalAuthor;
}

function findBookById(books, id) {
 let finalBooks = books.find((book) => book.id === id);
 return finalBooks;
}

function partitionBooksByBorrowedStatus(books) {
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}
function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};