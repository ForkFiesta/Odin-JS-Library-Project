const myLibrary = []


function Book(title, pages, author, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    addBookToLibrary(this);

}

const addBookToLibrary = ()=>{
    myLibrary.push(this);
}

const readOutLibrary = ()=>{
    myLibrary.forEach(book => {
        
    });
}


const submitButton = document.querySelector('.submit-button');
// console.log(submitButton);
submitButton.addEventListener('click', () =>{
    const bookTitle = document.querySelector("#title");
    const bookAuthor = document.querySelector("#author");
    const bookPages = document.querySelector("#pages");
    const hasRead = document.querySelector("input[name=radio]:checked");

    Book(bookTitle.value,bookAuthor.value,bookPages.value,hasRead);

})





