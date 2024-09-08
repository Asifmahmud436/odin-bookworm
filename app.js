const myLibrary = []

function Book(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
    
}

function addBookToLibrary(){
    // take user input value then put it in the book class
    let book = Book()
    // add the new book to the array
}

function displayBooks(){
    for(const book of myLibrary){
        // run the myLibrary array and display the books.
        // add a button to change the read property to on-off
        // add a delete button
    }
}