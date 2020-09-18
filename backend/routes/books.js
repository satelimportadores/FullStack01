const {Router} = require('express');
const router = Router();
//Requerir el modelo de libros
const Book = require('../models/Book')

//Prueba inicial de navegacion:
//router.get('/',(req,res)=>res.json({'text':'Satel importadores'}))

//buscar todos los libros que tenemos en la base de datos -evento asincrono:
router.get('/',async(req,res)=>{
    //find funciona como select * from
   const books = await Book.find();
   res.json(books);
});
//buscar todos los libros que tenemos en la base de datos -evento asincrono:

//Agregar un nuevo libro
router.post('/',async(req,res)=>{
 //console.log(req.body);
    const {title,author,isbn} = req.body;
    const newBook = new Book({title,author,isbn});
        //Guardar el libro
            //console.log(newBook);
            await newBook.save();
    res.json({'message':'Book Saved'});
});
//Agregar un nuevo libro

//Borrar un libro
router.delete('/:id', async(req,res) =>{
    //console.log(req.params.id);
    const book = await Book.findByIdAndDelete(req.params.id)
    //console.log(book);
    res.json({"message":"the book has been deleted"});
});
//Borrar un libro

module.exports = router;