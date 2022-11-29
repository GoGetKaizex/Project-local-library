function findAccountById(accounts, id) {
 const found = accounts.find(account => account.id == id )
 return found;
}
function sortAccountsByLastName(accounts) {
 accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;
}

function getTotalNumberOfBorrows(account, books) {
 let totalOut = 0;
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    totalOut += 1;
   }
  }
 }
 return totalOut;
}

function getBooksPossessedByAccount(account, books, authors) {
  const held = [];
  books.map((book) => {
    book.borrows.map((borrow) => {
      authors.map((author) => {
      
        if (author.id === book.authorId) book["author"] = author;
      });
      if (borrow.returned === false && borrow.id === account.id) {
        held.push(book);
      }
    });
  });
  return held;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
