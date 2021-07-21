//Codigo del cuadrado
console.group("Cuadrados"); //Nos permite agrupar una serie de consoles para tener mejor orden en la consola

/* const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado + " cm"); */

/*function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
} */ //Podriamos usar la sintaxis de la funcion normal
//Pero para este tipo de casos que se regresa una operacion sencilla
//Lo mejor es usar la funcion arrow ya que simplifica mucho el codigo.
const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4; 
console.log("El perimetro del cuadrado es: " + perimetroCuadrado(5) + " cm");

const areaCuadrado = (ladoCuadrado) => Math.pow(ladoCuadrado, 2);
console.log("El area del cuadrado es: " + areaCuadrado(5) + " cm2");

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden " 
            + ladoTriangulo1 + " cm, "
            + ladoTriangulo2 + " cm, y "
            + baseTriangulo + " cm"); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + " cm"); */

const perimetroTriangulo = (lado1, lado2,base) => lado1 + lado2 + base;
console.log("El perimetro del triangulo es: " + perimetroTriangulo(6,6,4) + " cm");

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log("El area del triangulo es: " + areaTriangulo(4,5.5) + " cm2");

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

/* const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + " cm"); */
const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;
console.log("El diametro del circulo mide: " + diametroCirculo(4) + " cm");

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo(4) + " cm");

const areaCirculo = (radio) => (radio * radio) * PI;
console.log("El area del circulo es: " + areaCirculo(4) + " cm2");

console.groupEnd();