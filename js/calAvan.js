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

