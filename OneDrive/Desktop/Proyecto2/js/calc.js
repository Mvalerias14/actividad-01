const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", function() {

    const number01 = document.getElementById("number01").value;
    const number02 = document.getElementById("number02").value;

    const result= document.getElementById("resultado");     

    if(number01 === "" || number02 === "") {
        result.textContent = "Debe ingresar los dos valores.";
        return;
    }
    //isNaN = is not a number
    if(isNaN(number01) || isNaN(number02)) {
        result.textContent = "Debe ingresar solamente números.";
        return;
    }

    const num1 = Number(number01);
    const num2 = Number(number02);

    let suma = num1 + num2;
    result.textContent = "La suma es: " + suma;

});