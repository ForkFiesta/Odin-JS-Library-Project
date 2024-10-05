const myLibrary = []

const libraryList = document.querySelector(".library");
function Book(title, pages, author, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    addBookToLibrary(this);
    readOutLibrary();


}

const addBookToLibrary = ()=>{
    myLibrary.push(this);
}

const readOutLibrary = ()=>{
    
    console.log("we made this far");
    myLibrary.forEach(book => {
        console.log(book.title);
    const newBook = document.createElement("li");
    newBook.innerHTML = `This is a test`;
    libraryList.appendChild(newBook);
    });
}


const submitButton = document.querySelector('.submit-button');
// console.log(submitButton);
submitButton.addEventListener('click', (event) =>{
    const bookTitle = document.querySelector("#title");
    const bookAuthor = document.querySelector("#author");
    const bookPages = document.querySelector("#pages");
    const hasRead = document.querySelector("input[name=radio]:checked");
    event.preventDefault();

    Book(bookTitle.value,bookAuthor.value,bookPages.value,hasRead);

})





