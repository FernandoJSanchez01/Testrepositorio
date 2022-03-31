var ahorro, resultadoahorro, gastospersonales, gastosbasicos;

function calculo() {
  ahorro = parseInt(document.getElementById("ingresos").value);
  resultadoahorro = document.getElementById("ahorrar").innerHTML = ahorro * 0.2;
}

function interes() {
  int = parseInt(document.getElementById("valorinteres").value);
  resultadointeres = document.getElementById("interesConv").innerHTML =
    int / 100;
}

var miArreglo = [10, 20, 30];
console.log(miArreglo[2]);
