const boton = document.getElementById("calcular");

boton.addEventListener("click", function() {

    let num1 = Number(document.getElementById("number01").value);
    let num2 = Number(document.getElementById("number02").value);

    let resultado = num1 + num2;

    document.getElementById("resultado").textContent = resultado;

    if(resultado > 100) {
        document.getElementById("resultado").style.backgroundColor = "yellow";
        document.getElementById("resultado").style.color = "black";
    } else {
        document.getElementById("resultado").style.backgroundColor = "red";
        document.getElementById("resultado").style.color = "white";
    }

});