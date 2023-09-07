const path = require('path');

function goIndex(req, res){
    const filePath = path.join(__dirname, '../../public/index.html')
    res.sendFile(filePath);
}

function goQuestions(req, res){
    const filePath = path.join(__dirname, '../../public/questions.html')
    res.sendFile(filePath);
}


module.exports = {
    goIndex,
    goQuestions
}