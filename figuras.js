
// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4; 
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triàngulo
/* console.group("Tríangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lado del tríangulo miden: "
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo); */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo) */

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2"); */

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
/* const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm"); */

// Diámetro

function diametroCirculo(radio){
    return radio * 2;
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia (diámetro * PI)

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// Área ((radio * 2) * PI)

function areaCirculo(radio){
    return (radio * radio) *PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2")
console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeladoB, trianguloGrandeLadoBase){
    if (ladoA != ladoB){
        console.erroe("Los lados a y b no so iguales");
    } else {
        let trianguloPequenoLadoA; // PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloPequenoLadoBase;

        
        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}