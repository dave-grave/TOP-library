const myLibrary = [];
const container = document.querySelector(".container");
const booklist = document.createElement("ul");
container.appendChild(booklist);

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

function addBookToLibrary(...books) {
  myLibrary.push(...books);
}

function displayLibrary() {
  for (let item of myLibrary) {
    const book = document.createElement("li");
    console.log(item);
    book.textContent = `Title: ${item.title}, Author: ${item.author}, pages: ${item.pages}
    `;
    booklist.appendChild(book);
  }
}

const hobbit1 = new Book("The Hobbit1", "JRR Tolkien", 295, true);
const hobbit2 = new Book("The Hobbit2", "JRR Tolkien", 296, true);
const hobbit3 = new Book("The Hobbit3", "JRR Tolkien", 297, true);
const hobbit4 = new Book("The Hobbit4", "JRR Tolkien", 298, true);

console.log(hobbit1.title);
addBookToLibrary(hobbit1, hobbit2, hobbit3, hobbit4);
displayLibrary();
