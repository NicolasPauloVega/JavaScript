//Llamamos a la funcion mostrar que se encuentra en index2.html
function mostrar() {

    //Creramos una variable llamada opc que le pida al usuario dijitar un numero para la operacion que desee hacer.
    opc = parseInt(prompt("Digita el numero para realizar la operacion adecuada a lo que buscas (Suma '1', Resta '2', Multiplicacion '3', division '4', ¿Cual es el mayor? = 5"))

    //Creamos el switch con el operado opc
    switch(opc) {

        //creamos el primer caso el cual tendra el parseFloat para poder colocar numeros decimales.
        case 1:
            num1 = parseFloat(prompt("Digita el primer numero"))
            num2 = parseFloat(prompt("Digita el segundo numero"))

            //Creamos una variable que sume los diferentes numeros.
            var suma = num1+num2

            //Creamos una condicion la cual analice los valores colocados por el usuario en el caso de que se cumpla la condicon mostrara el resultado de la suma pero si no lo hace mostrara un mensaje de error.
            if (num1 != 0 && num2 != 0) {
                document.write("La suma de esos numeros es "+suma)
            } else {
                document.write("Perdon o los datos que dijitaste son erroneos, la operacion da 0 o no estas realizando la operacion correcta")
            }
            //Usamos el break para acabar con el caso y dejar el resultado.
            break;
        
        //En este caso lo que haremos sera calcular una resta la cual nos arroge un resultado una respuesta o un mensaje de error.
        case 2:
            num1 = parseFloat(prompt("Digita el primer numero"))
            num2 = parseFloat(prompt("Digita el segundo numero"))
            var resta = num1-num2
            if (num1 != 0 && num2 != 0) {
                document.write("La resta de los numeros es "+resta)
            } else {
                document.write("Perdon o los datos que dijitaste son erroneos, la operacion da 0 o no estas realizando la operacion correcta")
            }
            break;
        
        //En este caso lo que hacemos es realizar una multiplicacion y con la condicion mostramos el resultado o un mensaje de error.
        case 3:
            num1 = parseFloat(prompt("Digita el primer numero"))
            num2 = parseFloat(prompt("Digita el segundo numero"))
            var multiplicacion = num1*num2
            if (num1 != 0 && num2 != 0) {
                document.write("La multiplicacion de los numeros es "+ multiplicacion)
            } else {
                document.write("Perdon o los datos que dijitaste son erroneos, la operacion da 0 o no estas realizando la operacion correcta")
            }
            break;
        
        //En este caso lo que hacemos es realizar una division la cual nos arroge una solucion o un error en caso de no digitarla bien.
        case 4:
            num1 = parseFloat(prompt("Digita el primer numero"))
            num2 = parseFloat(prompt("Digita el segundo numero"))
            var division = num1/num2
            if (num1 != 0 && num2 != 0) {
                document.write("La suma de esos numeros es "+division)
            } else {
                document.write("Perdon o los datos que dijitaste son erroneos,la operacion da 0 o no estas realizando la operacion correcta")
            }
            break;
        
        //En este caso lo que hacemos es identificar cual es el numero mayor arrojando un resultado o un error en caso de no estar bien digitado.
        case 5:
            num1 = parseFloat(prompt("Digita el primer numero"))
            num2 = parseFloat(prompt("Digita el segundo numero"))
            if (num1 > num2) {
                document.write("El numero "+num1+" Es mayor que el numero "+num2)
            } else if (num2 > num1){
                document.write("El numero "+num2+" Es mayor que el numero"+num1)
            } else {
                document.write("Perdon o los datos que dijitaste son erroneos,la operacion da 0, son iguales o no estas realizando la operacion correcta")
            }
            break;
        
        //Utilizamos defaul mayor mente para arrojar un resultado si ninguno de los casos se aplico.
        default:
            document.write("Opcion no valida...")
    }

}