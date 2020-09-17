const mongoose = require('mongoose');
//Requerir variables de entorno archivo .env
console.log(process.env.MONGODB_URI);

/*Se quita la cadena de conexion mongodb://localhost/javascriptdb
utilizar variables de entorno*/

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));
