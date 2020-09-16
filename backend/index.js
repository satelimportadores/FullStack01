const express = require('express');


//Inicializar
const app = express();


//Configuraciones
app.set('port',3000);

//Iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
})