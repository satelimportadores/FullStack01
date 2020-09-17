//Para leer variables de entorno .env
if (process.env.NODE_ENV !== 'production') {
    require ('dotenv').config();
}
//Mirar si estamos en modo desarrolador o produccion
//console.log(process.env.NODE_ENV);



const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');



//Inicializar
const app = express();
    //iniciarlizar la base de datos
    require('./database');


//Configuraciones
app.set('port',process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));

    //multer para subir imagenes:
    const storage = multer.diskStorage({
        destination: path.join(__dirname,'public/uploads'),
        filename(req,file,cb){
            cb(null, new Date().getTime()+ path.extname(file.originalname));
        }
    })
app.use(multer({storage}).single('image'));

    //ayudar a formularios a enviarlos como json
app.use(express.urlencoded({extended: false}));

    //enviar peticiones JSON
app.use(express.json());

//Routes
app.use('/api/books',require('./routes/books'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
})