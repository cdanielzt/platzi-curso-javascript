// Código de Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+"cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrada + "cm^2");
console.groupEnd();


//Código de triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 4;

console.log("Los lados del triángulo miden: "+ ladoTriangulo1+"cm, "+ladoTriangulo2+"cm, "+baseTriangulo+"cm");

console.log("La altura del triangulo es: "+alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: "+perimetroTriangulo+"cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Área del triangulo es: "+areaTriangulo+"cm²");

console.groupEnd();


//Código de Circulo
console.group("Circulo");

const radio = 6;
const diametro = radio * 2;

const PI = Math.PI;

const perimetroCirculo = diametro * PI;

const areaCirculo = (radio * radio) * PI;

console.log("El radio del circulo es: "+radio+"cm");
console.log("El diametro del circulo es: "+diametro+"cm");
console.log("El perímetro del círculo es: "+perimetroCirculo+"cm");
console.log("El area del circulo es: "+areaCirculo+"cm²");


