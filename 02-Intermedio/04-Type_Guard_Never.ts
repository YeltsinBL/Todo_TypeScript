interface Mario {
    nombre: string,
    saltar: () =>void
}
interface Sonic {
    nombre: string,
    correr: () => void
}
type Personaje = Mario | Sonic

// Type Guard: discrimina el tipo Mario
function checkIdSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje:Personaje) {
    if (checkIdSonic(personaje)){
        personaje.correr()
    } else {
        personaje.saltar()
    }
}

// Type Never
function verificar(x: number | string){
    if(typeof x === "number"){
        x.toFixed(2)
    } else if(typeof x === "string"){
        x.length
    } else{
        x // <-- indica el tipo never
    }
}