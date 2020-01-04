
function validar() {
    
    event.preventDefault();
    if((document.getElementById("login").value == "") || (document.getElementById("login").value == null)){
        var hiden = document.getElementById("hidden");

        var h1 = document.getElementById("h1");
        h1.innerHTML = 'Valores Inválidos ou NULL';
        h1.style.color = 'red';
        
        hiden.value = "inválido";

    }
    else if((document.getElementById("senha").value == "") || (document.getElementById("senha").value == null)){
        var hiden = document.getElementById("hidden");
        
        var h1 = document.getElementById("h1");
        h1.innerHTML = 'Valores Inválidos ou NULL';
        h1.style.color = 'red';

        hiden.value = "inválido";
    }
    else if((document.getElementById("nome").value == "") || (document.getElementById("nome").value == null)){
        var hiden = document.getElementById("hidden");
        
        var h1 = document.getElementById("h1");
        h1.innerHTML = 'Valores Inválidos ou NULL';
        h1.style.color = 'red';
        
        hiden.value = "inválido";
    }
    else{
        var hiden = document.getElementById("hidden");
        
        var h1 = document.getElementById("h1");
        h1.innerHTML = 'Valores Válidos';
        h1.style.color = 'green';
        
        hiden.value = "válido";

    }
}
