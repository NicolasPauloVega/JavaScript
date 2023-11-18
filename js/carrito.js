let contador = 0;

const valor = document.getElementById("valor")

function incremento(){
    contador += 1;
    valor.innerHTML = contador;
}

function decremento(){
    if(contador>0){
        contador -= 1;
        valor.innerHTML = contador;
    }else{
        contador = 0;
        valor.innerHTML = contador;
    }
}

function resetear(){
    contador = 0;
    valor.innerHTML = contador;
}

const valor1 = document.getElementById("valor1")

function aumento(){
    contador += 1;
    valor1.innerHTML = contador;
}

function desaumento(){
    if(contador > 0){
        contador -= 1;
        valor1.innerHTML = contador;
    }else{
        contador = 0;
        valor1.innerHTML = contador;
    }
}

function resetear1(){
    contador = 0;
    valor1.innerHTML = contador;
}