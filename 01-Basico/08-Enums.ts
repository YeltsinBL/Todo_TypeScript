const enum ERROR_TYPE {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}

function mostrarMensaje(tipoError: ERROR_TYPE) {
    if (tipoError === ERROR_TYPE.NOT_FOUND){
        console.log('No se encuentra el recurso');
    }else  if (tipoError === ERROR_TYPE.UNAUTHORIZED){
        console.log('No esta autorizado');
    } else  if (tipoError === ERROR_TYPE.FORBIDDEN){
        console.log('No tiene permiso para este recurso');
    }
}