function sumar(n1,n2){
    var resultado = n1+n2;
    var res = document.getElementById("resultado")

    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

function restar(n1,n2){
    var resultado = n1-n2;
    var resultado = document.getElementById("resultado")

    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

function multiplicar(n1,n2){
    var resultado = n1*n2;
    var resultado = document.getElementById("resultado")

    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

function dividir(n1,n2){
    var resultado = n1/n2;
    var resultado = document.getElementById("resultado")

    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    }else{
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

function mostrar(){
    alert("Estoy en mostrar")

    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let opc = parseInt(document.getElementById("opc").value)

    switch(opc){
        case 1:
            sumar(n1,n2)
            break
        case 2:
            restar()
            break
        case 3:
            multiplicar()
            break
        case 4:
            dividir()
            break
        default:
            alert("La opcion no es valida")
    }
}