const odinsLibrary = [];
console.log(odinsLibrary);

const addBookButton = document.getElementById('addBookButton');
const dialog = document.getElementById('dialog'); 
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
const container = document.getElementById('container');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBooksToLibrary(title, author, pages) {
    const aBook = new Book (title, author, pages);
    odinsLibrary.push(aBook);
}

addBookButton.addEventListener('click', () => {
    dialog.showModal();
    dialog.appendChild(submitButton);
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const pages = document.getElementById('bookPages').value;
    console.log(bookTitle);
    console.log(bookAuthor);
    console.log(bookPages);
    addBooksToLibrary(title, author, pages);
    updateAndShowInfo();
    dialog.close();
});

function updateAndShowInfo() {
    container.replaceChildren();

    odinsLibrary.forEach((book) => {
        const card = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const ISBN = document.createElement('div');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Book';
        const status = document.createElement('button');
        status.textContent = 'Read';
        const statusOfReadingBox = document.createElement('div');
        statusOfReadingBox.textContent = 'Not Read';

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        ISBN.textContent = crypto.randomUUID();

        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(ISBN);
        card.appendChild(status);
        card.appendChild(statusOfReadingBox);
        card.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            removeBook(card.index);
            updateAndShowInfo()
        });

        status.addEventListener('click', () => {
            if (status.textContent === 'Read') {
                statusOfReadingBox.textContent = 'Read';
                status.textContent = 'Not Read';
            } else {
                statusOfReadingBox.textContent = 'Not Read';
                status.textContent = 'Read';
            }
        });
    });

}

function removeBook(index) {
    const bookIndex = odinsLibrary.indexOf(index);
    odinsLibrary.splice(bookIndex, 1);
    console.log('index of removed book' + bookIndex);
}

 