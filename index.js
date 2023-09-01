require ()
const express = require('express');
const app = express();
const questionController = require('./server/controllers/questionController');

app.get('/api/questions', productController.getAll);
app.post('/api/answer', productController.create);

app.listen(8000, () => {
    console.log('Servidor corriendo en puerto 8000');
});