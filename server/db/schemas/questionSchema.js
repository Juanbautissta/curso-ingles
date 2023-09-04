const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const QuestionSchema = new Schema ({
    nivel: String,
    question: String,
    answers: Array
});

const Question = model('Question', QuestionSchema);

module.exports = Question;
