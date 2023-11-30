//Creamos 3 variables que pueden cambiar de valor
let contadorHtml = 0; //Para la cantidad del libros html
let contadorCss = 0; //Para la cantidad del libro css
let contadorJs = 0; //Para la cantidad del libro javascript

//Se crean 3 constante que no permitan cambiar su valor
const valor = document.getElementById('valor'); //atrae el valor de la cantidad del libro html
const valor1 = document.getElementById('valor1'); //atrae el valor de la cantidad del libro css
const valor2 = document.getElementById('valor2'); //atrae el valor de la cantidad del libro javascript
const total = document.getElementById('resultado'); //Atrae los valores que tiene el total del pedido
const valorLHtml = document.getElementById('valorLHtml');
const valorLCss = document.getElementById('valorLCss');
const valorLJs = document.getElementById('valorLJs');

//Se crea una funcion la cual sumará la cantidad de clics que haga el usuario en el boton más (+).
function incrementoHtml(){
    contadorHtml += 1;
    valor.innerHTML = contadorHtml //Se envia al contador de html
}

//Se crea una funcion la cual restará la cantidad de clics que haga el usuario en el boton menos (-).
function decrementoHtml(){
    //Se usa una condicion la cual identificará si el numero es mayor este mismo restará 1 al valor que se tenga si el numero es igual a 0 no se realizará la resta.
    if(contadorHtml > 0){
        contadorHtml -= 1;
        valor.innerHTML = contadorHtml; //Se envia al contador de html
    }else{
        contadorHtml = 0;
        valor.innerHTML = contadorHtml; //Se envia al contador de html
    }
}

//Se crea una funcion la cual reiniciará todo el conteo de la cantidad al momento de presionar el boton de reinicio (reset)
function resetearHtml(){
    contadorHtml = 0;
    valor.innerHTML = contadorHtml; //Se envia al contador de html
}

//Se crea una funcion la cual sumará la cantidad de clics que haga el usuario en el boton más (+).
function incrementCss(){
    contadorCss += 1;
    valor1.innerHTML = contadorCss; //Se envia al contador de css
}

//Se crea una funcion la cual restará la cantidad de clics que haga el usuario en el boton menos (-).
function decrementCss(){
    //Se usa una condicion la cual identificará si el numero es mayor este mismo restará 1 al valor que se tenga si el numero es igual a 0 no se realizará la resta.
    if(contadorCss > 0){
        contadorCss -= 1;
        valor1.innerHTML = contadorCss; //Se envia al contador de css
    }else{
        contadorCss = 0;
        valor1.innerHTML = contadorCss; //Se envia al contador de css
    }
}

//Se crea una funcion la cual reiniciará todo el conteo de la cantidad al momento de presionar el boton de reinicio (reset)
function resetCss(){
    contadorCss = 0;
    valor1.innerHTML = contadorCss; //Se envia al contador de css
}

//Se crea una funcion la cual sumará la cantidad de clics que haga el usuario en el boton más (+).
function incrementoJs(){
    contadorJs += 1;
    valor2.innerHTML = contadorJs; //Se envia al contador de javascript
}

//Se crea una funcion la cual restará la cantidad de clics que haga el usuario en el boton menos (-).
function decrementoJs(){
    //Se usa una condicion la cual identificará si el numero es mayor este mismo restará 1 al valor que se tenga si el numero es igual a 0 no se realizará la resta.
    if(contadorJs > 0){
        contadorJs -= 1;
        valor2.innerHTML = contadorJs; //Se envia al contador de javascript
    }else{
        contadorJs = 0;
        valor2.innerHTML = contadorJs; //Se envia al contador de javascript
    }
}

//Se crea una funcion la cual reiniciará todo el conteo de la cantidad al momento de presionar el boton de reinicio (reset)
function resetearJs(){
    contadorJs = 0;
    valor2.innerHTML = contadorJs; //Se envia al contador de javascript
}

//Se crea una funcion la cual calcule el total de todo el pedido.
function calcular(){

    //Se crean constantes que almacenen los valores predeterminados de una lista desplegable y otra que almacene el conteo actual de cada uno de los libros.
    const html = parseFloat(document.getElementById("html").value); //Almacena valores de la lista html.
    const valorH = contadorHtml; //Almacena los valores del contador de html

    const css = parseFloat(document.getElementById("css").value); //Almacena valores de la lista css
    const valorC = contadorCss; //Almacena valores del contador css

    const javascript = parseFloat(document.getElementById("javascript").value); //Almacena valores de la lista javascript
    const valorJ = contadorJs; //Almacena valores del contador javascript

    var resHtml = html * valorH; //Se calcula el valor total de html
    var resCss = css * valorC; //Se calcula el valor total de css
    var resJs = javascript * valorJ; //Se calcula el valor total de javascript

    var totalP = resHtml + resCss + resJs; //Se calcula el valor total del pedido

    total.innerHTML = `Total a pagar $${totalP}`; //se muestra el resultado total del pedido
}

function calculaLibroHtml(){
    const html1 = parseInt(document.getElementById("html").value);
    var resultadoHtml = html1*contadorHtml;
    valorLHtml.innerHTML = `total: $${resultadoHtml}`;
}

function calculaLibroCss(){
    const css1 = parseInt(document.getElementById("css").value);
    var resultadoCss = css1*contadorCss;
    valorLCss.innerHTML = `total: $${resultadoCss}`;
}

function calculaLibroJs(){
    const js1 = parseInt(document.getElementById("javascript").value);
    var resultadoJs = js1 * contadorJs;
    valorLJs.innerHTML = `total: $${resultadoJs}`;
}