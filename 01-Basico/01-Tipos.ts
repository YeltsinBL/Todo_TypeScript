// Fuertemente tipado, infiriendo los datos
let hola = 2 // ya se le asigno el tipo number
// hola = 'hola' // esto da error

// Anotaciones de tipos
let nombre:string = 'Yeltsin'
nombre.toUpperCase()
let numero:number = 2
let booleano:boolean = true
let flotante = 2.2
let nulo = null
let indefinido = undefined
let cualquiera: any = 'hola' // ignora el tipado de typescript
// cualquiera.toUpperCase() = '2' // da error
let no_se:unknown= 'Hola' // no se sabe que es el tipo
// no_se.toUpperCase() = 2 // da error porque no sabe que tipo de dato es

// Objetos
const persona = {
    name:'Yeltsin',
    age:25
}
persona.age

// union type
let union_type : string | number
union_type = 2
union_type = 'Hola'
