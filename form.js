function validar_usuario(string){
    /*  Requerimento sprint 2
        ➢ Solo debe contener caracteres
        alfanuméricos.
        ➢ Debe tener una longitud mínima de 6
        caracteres.
        ➢ Debe comenzar por una letra
        mayúscula.
        ➢ Debe tener una longitud máxima de
        12 caracteres.
    */
    const RegularExpression = /^[A-Z]{1,1}[a-zA-Z0-9]{5,11}$/;
    return (RegularExpression.test(string));
}
function validar_contrasena(string){
    /*  Requerimento sprint 2
        ➢ Debe contener al menos alguno de
        los siguientes caracteres especiales:
        ‘!’, ‘@’, ‘#’, ‘-’,’_’
        ➢ Debe tener una longitud mínima de 8
        caracteres.
        ➢ Debe comenzar por una letra
        mayúscula.
        ➢ Debe tener una longitud máxima de
        16 caracteres.  
    */
    const RegularExpression2 = /^[A-Z]{1,1}([a-zA-Z0-9@!#_-]{7,15})$/;
    const RegularExpression3 = /[@!#_-]{1,}/; // Al menos uno de estos @!#_-
    if (RegularExpression2.test(string)){ 
        return (RegularExpression3.test(string));
    } else {
        return (RegularExpression2.test(string));
    }
    
}
//Función únicamente para pruebas, no es evaluada por el bot
function pruebas (){
    const user = document.getElementById('campoUsuario').value;
    const pwd = document.getElementById('campoContrasena').value;
    validar_contrasena(pwd);
    validar_usuario(user);
    
}
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_usuario = validar_usuario;
