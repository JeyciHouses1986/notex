debugger

let entrada = parseInt(prompt(`Ingresar tamaño de pantalla (disponemos de 10 a 16 pulgadas). Para salir ingrese 0`));

while(entrada != 0 ){
   switch (entrada) {
        case 10:
            console.log("Selecciono 10 pulgadas");
            break;
        case 11:
            console.log("Selecciono 11 pulgadas");
            break;       
        case 12:
            console.log("Selecciono 12 pulgadas");
            break;
        case 13:
            console.log("Selecciono 13 pulgadas");
            break;
        case 14:
            console.log("Selecciono 14 pulgadas");
            break;
        case 15:
            console.log("Selecciono 15 pulgadas");
            break;
        case 16:
            console.log("Selecciono 16 pulgadas");
            break;
        default:
           alert("El tamaño ingresado no es valido")
            break;
   }
   entrada = parseInt(prompt(`Ingresar tamaño de pantalla (disponemos de 10 a 16 pulgadas). Para salir ingrese 0`));
}



calcular()

function calcular() {
    let primerNote = prompt("Ingrese el precio de la notebook:");
    let segundoAcce = prompt("Ingrese el precio del accesorio:");
    let operador = prompt("Selecciona la operación: ( + - * / )");
    let resultado = realizarCalculo(primerNote, segundoAcce, operador);
        console.log("Resultado", resultado);
}

function realizarCalculo(parametro1, parametro2, parametro3) {
switch(parametro3) {
    case "+":
        return parseInt(parametro1) + parseInt(parametro2)
    case "-":
        return parseInt(parametro1) - parseInt(parametro2)
    case "*":
        return parseInt(parametro1) * parseInt(parametro2)
    case "/":
        return parseInt(parametro1) / parseInt(parametro2)
    default:
        return "Error en el operador aritmético."
    }
}