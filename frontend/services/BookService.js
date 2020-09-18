class BookService{

    constructor(){
        this.URI = 'http://127.0.0.1:3000/api/books';
    }

    //Traer libros peticion get por defecto
        async getBooks(){
            const response = await fetch(this.URI);
            const books = await response.json();
            return books;
        }
        //Traer libros

        //guardar un libro
        async postBook(book){
            const response = await fetch(this.URI,{
                method: 'POST',
                body: book
            })
            const data = await response.json();
            console.log(data);
        }
        //guardar un libro

        //borrar un libro
        async deleteBook(bookId){
           const response = await fetch(`${this.URI}/${bookId}`,{
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            })
            const data = await response.json();
            console.log(data);
        }
        //borrar un libro

}
//formas de exportar la clase:
//module.exports = BookService;
export default BookService;