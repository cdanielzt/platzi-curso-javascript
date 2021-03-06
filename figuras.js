// Código de Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
} 


//Código de triángulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + 2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


//Código de Circulo

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es: "+perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area es: "+area)
}
