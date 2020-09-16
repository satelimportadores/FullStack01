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