const { conectarDB, desconectarDB  } = require("../db/connection");
const Question = require("../db/schemas/questionSchema")

const getAll = async (req, res) => {
    await conectarDB();
    const questions = await Question.find({});
    await desconectarDB();
    res.json(questions);
};

const create = async (req, res) => {
    const { nivel, question, answer } = req.body;
    await conectarDB();
    const product = new Question({ nivel, question, answer });
    const newQuestion = await Question.save();
    await desconectarDB();
    res.json();
}

module.exports = {
    getAll,
    create,
};