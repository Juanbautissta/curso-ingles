const basicoLi = document.getElementById('basico');
const intermedioLi = document.getElementById('intermedio');
const avanzadoLi = document.getElementById('avanzado');

basicoLi.addEventListener("click", () => {
    localStorage.setItem("nivel", "basico")
});

intermedioLi.addEventListener("click", () => {
    localStorage.setItem("nivel", "intermedio")
});

avanzadoLi.addEventListener("click", () => {
    localStorage.setItem("nivel", "avanzado")
});