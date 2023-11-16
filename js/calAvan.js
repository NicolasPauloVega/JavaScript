//Creamos una funcion que sume los numeros ingresados por el usuario.
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

//Creamos una funcion para restar el valor colocado por el usuario.
function restar(n1,n2){
    var resultado = n1-n2;
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

//Multiplicamos los valores que ingreso el usuario.
function multiplicar(n1,n2){
    var resultado = n1*n2;
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

//Dividimos los valores que ingreso el usuario.
function dividir(n1,n2){
    var resultado = n1/n2;
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

//Creamos una funcion que nos permite escoger en la pagina cual operacion queremos desarrollar.
function mostrar(){

    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let opc = parseInt(document.getElementById("opc").value)

    switch(opc){
        case 1:
            sumar(n1,n2)
            break
        case 2:
            restar(n1,n2)
            break
        case 3:
            multiplicar(n1,n2)
            break
        case 4:    
            dividir(n1,n2)
            break
        default:
            alert("La opcion no es valida")
    }
}