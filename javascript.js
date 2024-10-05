const dialog = document.querySelector("#bookDialog");
const addButton = document.querySelector(".addButton");
const cancelButton = document.querySelector("#cancel");
const updateButton = document.querySelector(".submit");
const modal = document.querySelector(".book_modal");
const form = document.querySelector("form");
const table = document.querySelector(".main-table");


// function openCheck(dialog) {
//   if (dialog.open) {
//     console.log("Dialog Open");
//   } else {
//     console.log("dialog Closed");
//   }
// }

if (addButton) {
  addButton.addEventListener("click", () => {
    // console.log("button clicked");
    dialog.showModal();
    modal.style.display = "flex";

  });
} else {
  console.log("no add button found");
}

if (cancelButton) {
  cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
    dialog.close();

  });
}

updateButton.addEventListener("click", () => {
  modal.style.display = "none";
  dialog.close();
  const bookTitle = document.querySelector("#bookTitle").value;
  const bookPages = document.querySelector("#bookPages").value;
  const bookAuthor = document.querySelector("#bookAuthor").value;
  const bookRead = document.querySelector("input[name=complete]:checked").value;
  Book(bookTitle, bookPages, bookAuthor, bookRead);
  form.reset();
});

const myLibrary = [];

const libraryList = document.querySelector(".library");
function Book(title, pages, author, read) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.read = read;
  addBookToLibrary(this);
//   readOutLibrary();
}

const addBookToLibrary = () => {
  myLibrary.push(this);
  readOutLibrary(this);

};

const readOutLibrary = (book) => {
    const newRow = document.createElement("tr");

    const newTitle = document.createElement("td");
    newTitle.innerHTML = book.title;
    newRow.appendChild(newTitle);

    const newPages = document.createElement("td");
    newPages.innerHTML = book.pages;
    newRow.appendChild(newPages);

    const newAuthor = document.createElement("td");
    newAuthor.innerHTML = book.author;
    newRow.appendChild(newAuthor);
    
    const hasRead = document.createElement("td");
    hasRead.innerHTML = book.read;
    newRow.appendChild(hasRead);

    const removeButtonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerHTML="X";
    removeButton.classList.add("removeButton");
    
    removeButtonCell.appendChild(removeButton);
    // removeButton.classList.add("removeButton");
    newRow.appendChild(removeButtonCell);

    table.appendChild(newRow);
    removeButton.addEventListener("click", ()=>{
        removeRow(newRow.rowIndex);

    })

    
  };

  function removeRow(rowIndex){
    delete myLibrary[rowIndex];
    table.deleteRow(rowIndex);
  }


//   const books = [
//     ['The Left Hand of Darkness', 'Ursula K. Le Guin', 304],
//     ['Gender Trouble', 'Judith Butler', 272],
//     ['Stone Butch Blues', 'Leslie Feinberg', 320],
//     ['Sister Outsider', 'Audre Lorde', 192],
//     ['Redefining Realness', 'Janet Mock', 288],
//     ['Fun Home', 'Alison Bechdel', 240],
//     ['The Argonauts', 'Maggie Nelson', 160],
//     ['Giovanni’s Room', 'James Baldwin', 176],
//     ['Transgender History', 'Susan Stryker', 208],
//     ['We Have Always Been Here', 'Samra Habib', 240]
//   ];

books.forEach(book => {
    Book(book[0], book[2], book[1], 'yes');
    
});

//   for (let i = 0; i < removeButton.length; i++){
//     removeButton[i].addEventListener("click", ()=>{
//         console.log("Button Clicked")
//     })
//   }
  

