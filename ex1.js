const booklist=["JavaScript opas","Python opas","SQL opas"];
const book={
    getBook(){
        console.log(booklist);
    },
    addBook(bookname){
        console.log("Kirja "+bookname+" lisättiin");
    }
}

book.getBook();
book.addBook("MogoDB opas")