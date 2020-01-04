
function validar() {
    event.preventDefault();
    if((document.getElementById("login").value == "") || (document.getElementById("login").value == null)){
        var hiden = document.getElementById("hidden");
        document.getElementById("h1").innerHTML = 'Valores Inválidos ou NULL';
        resultado = "inválido";
        hiden.value = "inválido";

    }
    else if((document.getElementById("senha").value == "") || (document.getElementById("senha").value == null)){
        var hiden = document.getElementById("hidden");
        document.getElementById("h1").innerHTML = 'Valores Inválidos ou NULL';
        resultado = "inválido";
        hiden.value = "inválido";
    }
    else if((document.getElementById("nome").value == "") || (document.getElementById("nome").value == null)){
        var hiden = document.getElementById("hidden");
        document.getElementById("h1").innerHTML = 'Valores Inválidos ou NULL';
        resultado = "inválido";
        hiden.value = "inválido";
    }
    else{
        var hiden = document.getElementById("hidden");
        document.getElementById("h1").innerHTML = "Valor Válidos";
        resultado = "válido";
        hiden.value = "válido";
    }
}
