function mostrarLongitud(objeto: number | string): number {
    if (typeof objeto === "string"){ // aplicación de narrowing
        return objeto.length
    }
    return objeto.toString().length
}

interface Mario {
    company:'Nintendo',
    nombre: string,
    saltar: () =>void
}
interface Sonic {
    company:'Sega',
    nombre: string,
    correr: () => void
}
type Personaje = Mario | Sonic

function jugar(personaje:Personaje) {
    if(personaje.company ==='Nintendo') {
        personaje.saltar()
        return
    }
    personaje.correr()
}