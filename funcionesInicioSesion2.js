let registros = [];

function ordenarArreglo_Apellido(){
    let objeto = {
        'nombre' : document.getElementById('campo1').value,
        'usuario': document.getElementById('campo2').value,
        'direccion': document.getElementById('campo8').value,
        'Contrasena': document.getElementById('campo3').value,
        'correo': document.getElementById('campo5').value,
        'confirmacioncontrasena': document.getElementById('campo4').value,
        'confirmacioncorreo': document.getElementById('campo6').value,
        'telefono': document.getElementById('campo7').value
    };
    registros.push(objeto);
    console.log("registro agregado");
    if (registros.length > 1){
        registros.sort(function (a, b) {
            if (a.nombre > b.nombre) {
              return 1;
            }
            if (a.nombre < b.nombre) {
              return -1;
            }
            return 0;
        });
    }
        console.log('registro ordenado')
        return registros;
}
function verificarInicioSesion2(correo, contrasena, arreglo){
    arreglo.forEach(credencial => {
        if (credencial.correo == correo && credencial.contrasena == contrasena) {
            //let respuesta = prompt("Capital de Brasil")
            return true;//true
        }
    });
    return false;
}
function verificarCaptcha2(respuesta) {
    if (respuesta == "brasilia"){
        return true;
    }else{
        return false;
    }
}

module.exports.verificarInicioSesion2 = verificarInicioSesion2;
module.exports.verificarCaptcha2 = verificarCaptcha2;
module.exports.ordenarArreglo_Apellido = ordenarArreglo_Apellido; 