const path = require('path');

function goIndex(req, res){
    const filePath = path.join(__dirname, '../../public/index.html')
    res.sendFile(filePath);
}

function goBasico(req, res){
    const filePath = path.join(__dirname, '../../public/basico.html')
    res.sendFile(filePath);
}

function goIntermedio(req, res){
    const filePath = path.join(__dirname, '../../public/intermedio.html')
    res.sendFile(filePath);
}

function goAvanzado(req, res){
    const filePath = path.join(__dirname, '../../public/avanzado.html')
    res.sendFile(filePath);
}

module.exports = {
    goIndex,
    goNosotros,
    goBasico,
    goIntermedio,
    goAvanzado
}