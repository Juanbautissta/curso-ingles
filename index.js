require("dotenv").config()
const express = require('express');
const app = express();
const questionController = require('./server/controllers/questionController');

app.get('/api/questions', questionController.getAll);
app.post('/api/answer', questionController.create);

app.listen(8000, () => {
    console.log('Servidor corriendo en puerto 8000');
});