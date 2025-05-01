// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
//Elementos de la tarjeta
const tarjetaFrontal = document.getElementById('frontal');
const tarjetaTrasera = document.getElementById('posterior');
// Función para voltear la tarjeta
function voltearTarjeta() {
    tarjetaFrontal.style.transform = 'rotateY(180deg)';
    tarjetaTrasera.style.transform = 'rotateY(0deg)';
}
// Función para volver a la cara frontal
function volverTarjeta() {
    tarjetaFrontal.style.transform = 'rotateY(0deg)';
    tarjetaTrasera.style.transform = 'rotateY(180deg)';
}
// Evento para mostrar detalles
verDetallesButton.addEventListener('click', () => {
    voltearTarjeta();
});
volverButton.addEventListener('click', () => {
    volverTarjeta();
});