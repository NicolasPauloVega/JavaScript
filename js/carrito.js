let contadorHtml = 0;
let contadorCss = 0;
let contadorJs = 0;

const valor = document.getElementById('valor');
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');

const total = document.getElementById('resultado');

function incrementoHtml(){
    contadorHtml += 1;
    valor.innerHTML = contadorHtml
}

function decrementoHtml(){
    if(contadorHtml > 0){
        contadorHtml -= 1;
        valor.innerHTML = contadorHtml;
    }else{
        contadorHtml = 0;
        valor.innerHTML = contadorHtml;
    }
}

function resetearHtml(){
    contadorHtml = 0;
    valor.innerHTML = contadorHtml;
}


function incrementoCss(){
    contadorCss += 1;
    valor1.innerHTML = contadorCss;
}

function decrementoCss(){
    contadorCss += 1;
    valor1.innerHTML = contadorCss;
}

function resetearCss(){
    if(contadorCss > 0){
        contadorCss -= 1;
        valor1.innerHTML = contadorCss;
    }else{
        contadorCss = 0;
        valor1.innerHTML = contadorCss;
    }
}

function incrementoJS(){
    contadorJs += 1;
    valor2.innerHTML = contadorJs;
}

function decrementoJs(){
    if(contadorJs > 0){
        contadorJs -= 1;
        valor2.innerHTML = contadorJs;
    }else{
        contadorJs = 0;
        valor2.innerHTML = contadorJs;
    }
}

function resetearJs(){
    contadorJs = 0;
    valor2.innerHTML = contadorJs;
}