function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  let individualAccountID = accounts.find((account) => account.id == id)
  return individualAccountID
  
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  /////////////////////////////////if a.last name is alphabetically less that b.last put it behind
/////////////////////////////////////otherwise opposite
  return accounts.sort((a, b) => (a.name.last < b.name.last) ? -1 : (a.name.last > b.name.last) ? 1 : 0)
}
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  const accountFullNames = accounts.map((account) => `${account.name.first} ${account.name.last}`)
  return accountFullNames
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
