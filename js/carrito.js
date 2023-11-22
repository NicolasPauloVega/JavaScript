//Creamos variable las cuales puede cambiar de valor y nos permitira sumar la cantida que desea comprar el usuario.

let contadorH = 0
let contadorC = 0
let contadorJ = 0

//Creamos un valor constante el cual nos mostrara la cantidad de objetos que escoge el usuario.
const valorHtml = document.getElementById("valorHtml")
const valorCss = document.getElementById("valorCss")
const valorJs = document.getElementById("valorJs")

// Creamos una funcion de incremento, decremento y reset para manipular la cantidad de productos que se escogen en el libro de html.

//Esta funcion suma 1 al contador que se muestra en los valores de html.
function incrementoHtml(){
    contadorH += 1;
    valorHtml.innerHTML = contadorH;
}

//Esta funcion resta 1 al contador que se muestra en los valores de html.
function decrementoHtml(){
    //Se usa una condicion la cual si identifica que el numero es mayor a 0 se le resta al contador pero sino se encuentra un numero mayor a 1 entonces deja el contador en 0.
    if (contadorH > 0){
        contadorH -= 1;
        valorHtml.innerHTML = contadorH;
    }else{
        contadorH = 0;
        valorHtml.innerHTML = contadorH;
    }
}

//Se reinicia el contador a 0 si el usuario lo desea.
function resetHtml(){
    contadorH = 0;
    valorHtml.innerHTML = contadorH;
}

//Creamos una funcion de incremento, decremento y reset para manipular la cantidad de productos que se escogen en el libro de css.

//Esta funcion suma 1 al contador que se muestra en los valores de css.
function incrementoCss(){
    contadorC += 1;
    valorCss.innerHTML = contadorC;
}

//Esta funcion resta 1 al contador que se muestra en los valores de css.
function decrementoCss(){
    //Se usa una condicion la cual si identifica que el numero es mayor a 0 se le resta al contador pero sino se encuentra un numero mayor a 1 entonces deja el contador en 0.
    if (contadorC > 0){
        contadorC -= 1;
        valorCss.innerHTML = contadorC;
    }else{
        contadorC = 0;
        valorCss.innerHTML = contadorC;
    }
}

//Se reinicia todos los valor.
function resetCss(){
    contadorC = 0;
    valorCss.innerHTML = contadorC;
}

//Creamos una funcion de incremento, decremento y reset para manipular la cantidad de productos que se escogen en el libro de css.

//Esta funcion suma 1 al contador que se muestra en los valores de js.
function incrementoJs(){
    contadorJ += 1;
    valorJs.innerHTML = contadorJ;
}

//Esta funcion resta 1 al contador que se muestra en los valores de js.
function decrementoJs(){
    ////Se usa una condicion la cual si identifica que el numero es mayor a 0 se le resta al contador pero sino se encuentra un numero mayor a 1 entonces deja el contador en 0.
    if (contadorJ > 0){
        contadorJ -= 1;
        valorJs.innerHTML = contadorJ;
    }else{
        contadorJ = 0;
        valorJs.innerHTML = contadorJ;
    }
}
//Se reinicia todos los valor.
function resetJs(){
    contadorJ = 0;
    valorJs.innerHTML = contadorJ;
}

