let smartTvSamsung = 144.999;
let aspiradoraRobot = 153.899;
let cabinaParaUñas = 20.774;
let camaraDeSeguridad = 17.620;
let mochilaTactica = 21.299;
let pistolaDeAgua = 10.799;

let ingresarNombre = true;


while (ingresarNombre) {
    
    let nombreUsuario = prompt("Ingrese su nombre");
    let apellidoUsuario = prompt ("Ingrese su apellido");

    if(nombreUsuario, apellidoUsuario == ""){
        alert("No ingresaste nombre o apellido")
        ingresarNombre = true;
    }
    else {
        alert("Bienvenido a BoostBid " + nombreUsuario + " " + apellidoUsuario)
        ingresarNombre = false;
    };
}

let continuar = true;

while (continuar){
    let carrito = []
    let precios = []

    for(let i = 0; i < 7; i++) {
        let opcionProducto = prompt(
            "1. Smart TV Samsung\n" +
            "2. Aspiradora robot\n" +
            "3. Cabina para uñas\n" +
            "4. Cámara de seguridad\n" +
            "5. Mochila táctica\n" +
            "6. Pistola de agua\n" + 
            "7. Ver carrito\n" 
    );

    if (opcionProducto == 1) {
        let producto1 = "Smart TV samsung\n"
        carrito.push(producto1)
        precios.push(smartTvSamsung)
    } else if (opcionProducto == 2) {
        let producto2 = "Aspiradora robot\n"
        carrito.push(producto2)
        precios.push(aspiradoraRobot)
    } else if (opcionProducto == 3) {
        let producto3 = "Cabina para uñas\n"
        carrito.push(producto3)
        precios.push(cabinaParaUñas)
    }else if (opcionProducto == 4) {
        let producto4 = "Cámara de seguridad\n"
        carrito.push(producto4)
        precios.push(camaraDeSeguridad)
    }else if (opcionProducto == 5) {
        let producto5 = "Mochila táctica\n"
        carrito.push(producto5)
        precios.push(mochilaTactica)
    }else if (opcionProducto == 6) {
        let producto6 = "Pistola de agua\n"
        carrito.push(producto6)
        precios.push(pistolaDeAgua)
    }else if (opcionProducto == 7){
        break;
    }
    }
    let precioTotal = 0

    for(let i = 0; i < precios.length; i++){
        precioTotal += precios[i];
    }

    alert(carrito);
    alert("El total de su compra es de " + precioTotal );

    let comprar = prompt("Desea realizar su compra? si/no")
    if (comprar == "si") {
        alert("Realizando pago...")
        continuar = false;
    } else {
        continuar = true;
    }
}

alert("Gracias por confiar en BoostBid, nos vemos pronto :)")
