const getAll = async (req, res) => {
    res.json({ message: "test" });
};

const create = async (req, res) => {
    res.json({ message: "" });
};

module.exports = {
    getAll,
    create,
};