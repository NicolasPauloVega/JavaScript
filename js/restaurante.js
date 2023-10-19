function mostrar(){
    const platos = parseFloat(document.getElementById("comida").value);
    let cantPlatos = parseInt(document.getElementById("cantidadPlatos").value);
    const bebida = parseFloat(document.getElementById("bebida").value);
    let cantbebidas = parseInt(document.getElementById("cantidadBebidas").value);

    var resPlatos = platos * cantPlatos;
    var resBebida = bebida * cantbebidas;

    var total = resPlatos + resBebida;

    respuesta.innerHTML = `Total ${total}`;
}