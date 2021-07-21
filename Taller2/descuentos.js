const precio = document.getElementById('precio');
const descuento = document.getElementById('descuento');
const botonDescuento = document.getElementById('button-descuentos');
const divRespuestaDescuento = document.getElementById('respuesta-descuento');

botonDescuento.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML(divRespuestaDescuento);
    const totalPrecioConDescuento = calcularPrecioConDescuento(precio.value, descuento.value);
    const parrafo = document.createElement('p');
    parrafo.innerHTML = `$ ${totalPrecioConDescuento}`;
    divRespuestaDescuento.appendChild(parrafo);
});

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function limpiarHTML(elementToClean) {
    while(elementToClean.firstChild)
        elementToClean.removeChild(elementToClean.firstChild);
}