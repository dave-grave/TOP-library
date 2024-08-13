const myLibrary = [];

const container = document.querySelector(".container");
const booklist = document.createElement("ul");
container.appendChild(booklist);

function Book(title, author, pages, hasBeenRead = false) {
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
    book.textContent = `Title: ${item.title}, Author: ${item.author}, pages: ${item.pages}
    `;
    booklist.appendChild(book);
  }
}

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBookButton");
const submitButton = document.querySelector("#submitButton");

newBookButton.style.width = "200px";
newBookButton.style.height = "50px";
newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const inputElements = document.querySelectorAll("input");
  const inputTexts = [];

  for (let item of inputElements) {
    inputTexts.push(item.value);
    item.textContent = "";
  }

  const newBook = new Book(...inputTexts);
  addBookToLibrary(newBook);
  displayLibrary();

  dialog.close();
});

// const hobbit1 = new Book("The Hobbit1", "JRR Tolkien", 295, true);
