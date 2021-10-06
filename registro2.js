let formsRepository = [];


document.getElementById('button_register').addEventListener('click', caputureForm);

function caputureForm(e){
    e.preventDefault();
    let formInstance = {
        nombreCompleto : document.getElementById('campo1').value,
        nombreUsuario: document.getElementById('campoUsuario').value,
        contrasena: document.getElementById('campoContrasena').value,
        confContrasena: document.getElementById('campo4').value,
        correoElectronico: document.getElementById('campo5').value,
        confirCorreo: document.getElementById('campo6').value,
        telefono: document.getElementById('campo7').value,
        direccionResidencia: document.getElementById('campo8').value
    }
    if (formsRepository.length < 20) {
        formsRepository.push(formInstance);
        document.forms[0].reset();
    }else {
        alert("no se aceptan más formularios");
        document.forms[0].reset();
        //ordenarArreglo_Apellido(formsRepository); // Para pruebas
    }


    console.warn('added', {formsRepository})
}
//Funciones sprint 3
function ordenarArreglo_Apellido(arreglo){
    arreglo.sort(function (a, b) {
        if (a.nombreCompleto > b.nombreCompleto) {
          return 1;
        }
        if (a.nombreCompleto < b.nombreCompleto) {
          return -1;
        }
        return 0;
      });
    return arreglo;
    //retornarRegistroMedio(arreglo); // Para pruebas
}
function retornarRegistroMedio(args){
    let index = args.length
    return ((index % 2) == 0)?(args[(index/2)-1]):(args[(index-1)/2]);
}
module.exports.ordenarArreglo_Apellido = ordenarArreglo_Apellido();
module.exports.retornarRegistroMedio = retornarRegistroMedio();

