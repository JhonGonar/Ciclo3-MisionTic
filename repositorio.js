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
    }


    console.warn('added', {formsRepository})
}




