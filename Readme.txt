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
