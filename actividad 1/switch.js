//Crear un switch que me calcule los datos dependiendo de que numero seleccion ya sea 1,2,3,4
    //1. Cuadrado, 2. Rectangulo, 3. Triangulo y lo deje salir
function mostrar() {
    

    opc= parseInt(prompt("Digita un numero que represente el area que quieres saber Cuadrado(1), Rectangulo(2), Triangulo(3), salir(4)"))
    
    switch(opc) {

        case 1:
            l1 = parseInt(prompt("Digita el lado"));
                var resultado = l1 * l1;
                    if (l1 != 0){
                        document.write("El resultado del area es "+ resultado)
                    } else {
                        document.write("No dijitaste bien los datos...")
                    }
                break;
        
        case 2:
            b1 = parseInt(prompt("Digita la base"));
            al1 = parseInt(prompt("Digita la altura"));
                var resultado = b1 * al1;
                    if (b1 != 0 && al1 !=0) {
                        document.write("El resultado del area es "+ resultado)
                    } else {
                        document.write("No dijitaste bien los datos")
                    }
                    break;
        
        case 3:
            b = parseInt(prompt("Digita la base"));
            a = parseInt(prompt("Digita la altura"));
                    var resultado = b*a/2
                        if (b != 0 && a !=0) {
                            document.write("El resultado del area es "+ resultado)
                        } else {
                            document.write("No dijitaste bien los datos")
                        }

        default:
    }

}