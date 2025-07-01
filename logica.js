function compararEdad() {
    let personaUno = document.getElementById('nombreUno').value;
    let personaDos = document.getElementById('nombreDos').value;
    let personaTres = document.getElementById('nombreTres').value;

    let edadUno = parseInt(document.getElementById('edadUno').value);
    let edadDos = parseInt(document.getElementById('edadDos').value);
    let edadTres = parseInt(document.getElementById('edadTres').value);

    let mensaje = document.getElementById('decision');

    if (edadUno >= edadDos && edadUno >= edadTres) {
        mensaje.innerText = `${personaUno}, tú eres el mayor y tu edad es ${edadUno}`;
    } else if (edadDos >= edadUno && edadDos >= edadTres) {
        mensaje.innerText = `${personaDos}, tú eres el mayor y tu edad es ${edadDos}`;
    } else {
        mensaje.innerText = `${personaTres}, tú eres el mayor y tu edad es ${edadTres}`;
    }
}

function sugerirRegalo() {
    let dinero = parseFloat(document.getElementById("dinero").value);
    let resultado = document.getElementById("resultado");
    if (isNaN(dinero) || dinero < 0) {
        resultado.innerText = "Por favor, ingresa una cantidad válida.";
    } else if (dinero <= 10) {
        resultado.innerText = "Puedes comprar una tarjeta.";
    } else if (dinero >= 11 && dinero <= 100) {
        resultado.innerText = "Puedes comprar chocolates.";
    } else if (dinero >= 101 && dinero <= 250) {
        resultado.innerText = "Puedes comprar flores.";
    } else if (dinero > 251) {
        resultado.innerText = "Puedes comprar un anillo.";
    } else {
        resultado.innerText = "No hay sugerencia para este monto.";
    }
}
function calcularCosto() {
    let horas = parseInt(document.getElementById("horas").value);
    let resultado = document.getElementById("resultado");
    let costo = 0;
    if (isNaN(horas) || horas < 0) {
        resultado.innerText = "Por favor, ingresa una cantidad válida de horas.";
        return;
    }
    if (horas <= 2) {
        costo = horas * 5;
    } else {
        costo += 2 * 5; // Primeras 2 horas
        let horasRestantes = horas - 2;
        if (horasRestantes <= 3) {
            costo += horasRestantes * 4;
        } else {
            costo += 3 * 4; // Siguientes 3 horas
            horasRestantes -= 3;
            if (horasRestantes <= 5) {
                costo += horasRestantes * 3;
            } else {
                costo += 5 * 3; // Siguientes 5 horas
                horasRestantes -= 5;
                costo += horasRestantes * 2; // Resto de horas a $2
            }
        }
    }
    resultado.innerText = `El total a pagar es: ₡${costo.toFixed(2)}`;
}
function calcularBono() {
    const salarioMinino = 1000;
    let nombreP = document.getElementById('nombreProfesor').value;
    let puntosP = parseFloat(document.getElementById('puntosProfesor').value);
    let textoContenido = document.getElementById('decision');


    if (puntosP > 151) {
        bono = salarioMinino * 3;
        textoContenido.textContent = `Su nombre es ${nombreP} y su bono es: $${bono}`;
    } else if (puntosP >= 101 && puntosP <= 150) {
        bono = salarioMinino * 2;
        textoContenido.textContent = `su nombre es ${nombreP} y su bono es: $${bono}`;
    }
    else if (puntosP >= 0 && puntosP < 100) {
        bono = salarioMinino * 1;
        textoContenido.textContent = `su nombre es ${nombreP} y su bono es: $${bono}`;
    }
}

