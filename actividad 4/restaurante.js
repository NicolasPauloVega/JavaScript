//Llamamos a la funcion mostrar() que se encuentra en el boton que pertenece al index4.html
function mostrar(){
    //Creamos una constante la cual almacene los valores de cada plato de comida
    const platos = parseFloat(document.getElementById("comida").value);

    //declaramos una variable let llamada cantPlatos la cual permite cambiar el valor de cantidadPlatos
    let cantPlatos = parseInt(document.getElementById("cantidadPlatos").value);

    //Creamos una constante la cual almacene los valores de cada bebida.
    const bebida = parseFloat(document.getElementById("bebida").value);

    //declaramos una variable let llamada cantBebidas la cual permite cambiar el valor de cantidadBebidas
    let cantbebidas = parseInt(document.getElementById("cantidadBebidas").value);

    //Creamos 2 variables llamadas resPlatos la cual nos muestra el valor total por platos y bebidas.
    var resPlatos = platos * cantPlatos;
    var resBebida = bebida * cantbebidas;

    //Creamos una variable la cual calcula el valor total del pedido.
    var total = resPlatos + resBebida;

    //Finalmente mostramos el resultado abajo del boton.
    respuesta.innerHTML = `Total $${total}`;
}

