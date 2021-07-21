//Global scope
const PI = Math.PI;
//Elementos del cuadrado
const ladoCuadrado = document.getElementById('ladoCuadrado');
const botonPerimetroCuadrado = document.getElementById('botonPerimetroCuadrado');
const botonAreaCuadrado = document.getElementById('botonAreaCuadrado');
const divRespuestaCuadrado = document.getElementById('respuesta-cuadrado');
//Elementos del triangulo
const lado1Triangulo = document.getElementById('ladoTriangulo1');
const lado2Triangulo = document.getElementById('ladoTriangulo2');
const baseTriangulo = document.getElementById('baseTriangulo');
const alturaTriangulo = document.getElementById('alturaTriangulo');
const botonPerimetroTriangulo = document.getElementById('botonPerimetroTriangulo');
const botonAreaTriangulo = document.getElementById('botonAreaTriangulo');
const divRespuestaTriangulo = document.getElementById('respuesta-triangulo');
//Elementos del circulo
const radioCirculo = document.getElementById('radioCirculo');
const botonDiametroCirculo = document.getElementById('botonDiametroCirculo');
const botonPerimetroCirculo = document.getElementById('botonPerimetroCirculo');
const botonAreaCirculo = document.getElementById('botonAreaCirculo');
const divRespuestaCirculo = document.getElementById('respuesta-circulo');

//Codigo del cuadrado
botonPerimetroCuadrado.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML(divRespuestaCuadrado);
    const perimetroCuadrado = CalcularPerimetroCuadrado(ladoCuadrado.value);
    crearParrafo(divRespuestaCuadrado, "Perimetro", perimetroCuadrado);
});

botonAreaCuadrado.addEventListener('click', (e) => {
    limpiarHTML(divRespuestaCuadrado);
    const areaCuadrado = CalcularPerimetroCuadrado(ladoCuadrado.value);
    crearParrafo(divRespuestaCuadrado, "Area", areaCuadrado);
});

function CalcularPerimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
};

function CalcularAreaCuadrado(ladoCuadrado) {
    return Math.pow(ladoCuadrado, 2);
};

//Codigo del Triangulo
botonPerimetroTriangulo.addEventListener('click', (e) => {
    e.preventDefault;
    limpiarHTML(divRespuestaTriangulo);
    const perimetroTriangulo = CalcularPerimetroTriangulo(lado1Triangulo.value, lado2Triangulo.value, baseTriangulo.value);
    crearParrafo(divRespuestaTriangulo, "Perimetro", perimetroTriangulo);
});

botonAreaTriangulo.addEventListener('click', (e) => {
    e.preventDefault;
    limpiarHTML(divRespuestaTriangulo);
    const areaTriangulo = CalcularAreaTriangulo(baseTriangulo.value, alturaTriangulo.value);
    crearParrafo(divRespuestaTriangulo, "Area", areaTriangulo);
});

function CalcularPerimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}; 

function CalcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Codigo del Circulo
botonDiametroCirculo.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML(divRespuestaCirculo);
    const diametroCirculo = CalcularDiametroCirculo(radioCirculo.value);
    crearParrafo(divRespuestaCirculo, "Diametro", diametroCirculo);
});

botonPerimetroCirculo.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML(divRespuestaCirculo);
    const perimetroCirculo = CalcularPerimetroCirculo(radioCirculo.value);
    crearParrafo(divRespuestaCirculo, "Perimetro", perimetroCirculo);
});

botonAreaCirculo.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML(divRespuestaCirculo);
    const areaCirculo = CalcularAreaCirculo(radioCirculo.value);
    crearParrafo(divRespuestaCirculo, "Area", areaCirculo);
});

function CalcularDiametroCirculo(radio) {
    return radio * 2;
};

function CalcularPerimetroCirculo(radio) {
    return CalcularDiametroCirculo(radio) * PI;
};

function CalcularAreaCirculo(radio) {
    return (radio * radio) * PI;
};


//Funcion para agregar un parrafo al HTML
function crearParrafo( divFigura, valor, respuesta) {
    const parrafoRespuesta = document.createElement('p');
    if(valor === "Area") {
        parrafoRespuesta.innerHTML = `
            ${valor}: ${respuesta} cm2
        `;
    } else {
        parrafoRespuesta.innerHTML = `
            ${valor}: ${respuesta} cm
        `;
    }
    divFigura.appendChild(parrafoRespuesta);
}

//Funcion para limpiar el HTML
function limpiarHTML(elementToClean) {
    while (elementToClean.firstChild) {
        elementToClean.removeChild(elementToClean.firstChild);
    }
}