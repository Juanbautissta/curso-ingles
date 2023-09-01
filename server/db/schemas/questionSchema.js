const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { Schema, model} = mongoose;

const QuestionSchema = new Schema ({
    nivel: String,
    question: String,
    answer: Array
});

const Question = model('Question', QuestionSchema);

module.exports = Question;
