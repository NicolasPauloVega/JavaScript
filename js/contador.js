//Creamos una funcion windows que al momento de que el usuario digite una letra y cumpla con un evento al momento de cumplirse una condicion
window.addEventListener("keydown", (e) => {
    if(e.key == "+"){
        incremento()
    }
    else if(e.key == "-"){
        decremento()
    }
})

let contador = 0;
const valor= document.getElementById("valor")

//Creamos una funcion la cual sume las veces que se de like en la pagina y muestre el resultado en la pagina web
function incremento(){
    contador += 1;
    valor.innerHTML = contador;
}

//Creamos una funcion la cual va a decrementar el contador.
function decremento(){
    //Creamos 2 condiciones las cuales identifica si el numero es mayor a 0 le resta 1 al contador pero si el contador tiene un valor de 1 no le resta ni le suma lo deja con su valor.
    if(contador > 0){
        contador -= 1;
        valor.innerHTML = contador;
    }else{
        contador = 0;
        valor.innerHTML = contador;
    }
}

//Creamos una funcion que vuelve el contador a su estado natural.
function resetear(){
    contador = 0;
    valor.innerHTML = contador
}