theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const myLibrary = [theHobbit];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function (){
    readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
}

function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = parseInt(document.querySelector("#pages").value, 10);
    const read = document.querySelector("#readStatus").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.textContent = newBook.info();
    
    const removeBookBtn = document.createElement("button");
    removeBookBtn.textContent = "Remove";
    removeBookBtn.addEventListener("click", removeBookFromLibrary)
    bookCard.appendChild(removeBookBtn);
    bookCard.setAttribute("data-index", library.length - 1);
    
    library.appendChild(bookCard);
  }


function removeBookFromLibrary(event){
    const bookCard = event.target.parentElement;
    const bookIndex = bookCard.getAttribute("data-index");
    myLibrary.splice(bookIndex, 1);
    bookCard.remove();
    updateBookIndicies();
}

function updateBookIndicies(){
    books = document.querySelectorAll(".card");
    books.forEach((book, index) => {
        book.setAttribute("data-index", index);
    });
}

const library = document.querySelector(".library");
const addBookButton = document.querySelector(".add-book-btn")
addBookButton.addEventListener("click", addBookToLibrary)