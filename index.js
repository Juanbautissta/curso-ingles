require("dotenv").config()
const express = require('express');
const app = express();
const path = require("path")

const questionController = require('./server/controllers/questionController');
const navigationController = require ("./server/controllers/navegationController");

//acceder carpeta
app.use(express.static(path.join(__dirname, './public')));
// intermediario entre cliente (pagina) y servidor, el navegador pide permiso a el servidor
app.use(express.json());

app.get('/api/questions', questionController.getAll);
app.post('/api/answer', questionController.create);
app.post('/api/results', questionController.results);

app.get('/', navigationController.goIndex);
app.get('/basico', navigationController.goBasico);
app.get('/intermedio', navigationController.goIntermedio);
app.get('/avanzado', navigationController.goAvanzado);

app.listen(8000, () => {
    console.log('Servidor corriendo en puerto 8000');
});