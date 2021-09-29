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
    if (string.search(RegularExpression)){
        console.log('False');
        console.log(string);
        return false;
    }
    console.log('True')
    console.log(string);
    return true;
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
    const RegularExpression2 = /^[A-Z]{1,1}[a-zA-Z0-9]{7,15}/;
    
    const RegularExpression3 = /[@!#_-]{1,}/;
    if (RegularExpression3.test(string)){
        console.log('Simbolos OK');
        console.log(string);
        /*return false;*/ 
        if (string.search(RegularExpression2)){
            console.log('largo OK') 
            console.log(string);
            return true;
        }else{
            console.log('true largo')
            console.log(string);
            return true;
        }
    }

    if (string !=''){
        console.log('no es null')
        console.log(string);
        return true;
    } else {
        console.log('vacio')
        return false;}
    
}
function pruebas (){
    const user = document.getElementById('campoUsuario').value;
    const pwd = document.getElementById('campoContrasena').value;
    validar_usuario(user);
    validar_contrasena(pwd);
}
module.exports.validar_usuario = validar_usuario;
module.exports.validar_contrasena = validar_contrasena;