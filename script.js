const myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary (title, author, pages, status) {

    let aBook = new Book (title, author, pages, status);
    myLibrary.push(aBook);
}



addBookToLibrary ("narnia", "jfjf", 878, "read");
addBookToLibrary ("harry potter", "jfjf", 878, "read");
addBookToLibrary ("new age", "jfjf", 878, "read");
myLibrary.forEach((element) => {element.id = crypto.randomUUID()});

const container = document.getElementById("container");

for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const status = document.createElement('div');
    const id = document.createElement('div');
    title.className = "title";
    card.className = "card";
    author.className = "author";
    pages.className = "pages";
    status.className = "status";
    id.className = "id";
    title.innerText = `${myLibrary[i].title}`;
    author.innerText = `${myLibrary[i].author}`;
    pages.innerText = `${myLibrary[i].pages}`;
    status.innerText = `${myLibrary[i].status}`;
    id.innerText = `${myLibrary[i].id}`;
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(id);
 }

console.log(myLibrary);