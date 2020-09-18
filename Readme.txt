Javascript FullStack
https://www.youtube.com/watch?v=Fs1G1BcP4BI&list=PLo5lAe9kQrwq7n_REwpZdfggPCBW2ggnh

Iniciar el proyecto
    npm -version
    npm init -y

Agregar dependencias:
    npm i express mongoose morgan multer dotenv cross-env cors fs-extra
        multer-dependencia espcecial para imagenes
    Agregar dependencias de desarrollo:
    npm i nodemon
Correr el servidor:
    npx nodemon backend/index.js
    o creando el script "dev": "npx nodemon backend/index.js"
    npm run dev

Iniciar servidor de mongoose
    cd C:\Program Files\MongoDB\Server\3.6\bin
    mongod.exe --dbpath D:\mongodb\data\db
    
    Abrir shell mongo
        cd C:\Program Files\MongoDB\Server\3.6\bin
        mongo

Programa que emula ser una aplicacion cliente POSTMAN 
    Header content/type JSON - Body JSON
    {
        "title" : "I robot",
        "author" :"Isaac Robin",
        "isbn": "Test"
    }

----------//Inicio Frontend//----------
Webpack toma todos los archivos js los reduce  y los deja para producción.

//instalar dependencias para el Frontend

instalacion de dependencias de desarrollo:
npm i -D webpack webpack-cli html-webpack-plugin css-loader style-loader mini-css-extract-plugin webpack-dev-server timeago.js