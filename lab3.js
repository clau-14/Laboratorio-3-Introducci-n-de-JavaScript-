const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == "suma") {
        return (num1 + num2);
    } 
    else if (operacion == "resta") {
        return (num1 - num2);
    }
    else if (operacion == "multiplicacion") {
        return (num1 * num2);
    }
    else if (operacion == "division") {
        if (num2 == 0) {
            return "No es posible realizar una division por cero"
        }

        return (num1 / num2);
    }
    else {
        return "Esta operacion no es valida"
    }
}

let num1, num2, operacion;
let pregunta;

while(operacion != "salir") {
    num1 = prompt("\nIngrese el primer numero \n");
    num2 = prompt("Ingrese el segundo numero \n");
    
    operacion = prompt("Ingrese la operacion (suma, resta, multiplicacion, division): \n");

    alert("El resultado es: ")
    alert(realizarOperacion)

    pregunta = prompt("\n\nDesea realizar otra operacion? \n")

    if (pregunta == "si") {
        continue
    } else {
        alert("Gracias por usar la calculadora! Adios!!\n")
        break
    }
}
