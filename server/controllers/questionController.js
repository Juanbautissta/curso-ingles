const { conectarDB, desconectarDB  } = require("../db/connection");
const Product = require("../db/schemas/questionSchema")

const getAll = async (req, res) => {
    await conectarDB();
    // User.find es una promesa que retorna un array de usuarios
    const questions = await Product.find({});
    await desconectarDB();
    res.json(questions);
};

const create = async (req, res) => {
    const { nivel, question, answer } = req.body;
    await conectarDB();
    // creamos un usuario con new User y lo guardamos en la base de datos con save()
    const product = new Question({ nivel, question, answer });
    // user.save() es una promesa que retorna el usuario guardado
    const newQuestion = await product.save();
    await desconectarDB();
    res.json();
}

module.exports = {
    getAll,
    create,
};