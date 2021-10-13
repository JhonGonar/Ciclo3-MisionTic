
//Funciones sprint 3
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
function retornarRegistroMedio(args){
    args = registros;
    let index = args.length
    return ((index % 2) == 0)?(args[(index/2)-1]):(args[(index-1)/2]);
}
module.exports.registros = registros;
module.exports.ordenarArreglo_Apellido = ordenarArreglo_Apellido;
module.exports.retornarRegistroMedio = retornarRegistroMedio;