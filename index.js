const myLibrary = [];

function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      hasBeenRead ? "has been read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {}
