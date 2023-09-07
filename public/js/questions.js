const nivelSeleccionado = localStorage.getItem('nivel');
const answer = document.getElementById('Answer')
const nivel = document.getElementById('Nivel')
const questions = document.getElementById('Questions')


fetch('/api/questions?nivel=' + nivelSeleccionado)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })