// Parámetro simple
function saludar(name:string){
    console.log(`Hola ${name}`)
}

// Objeto como parámetro 
// 1ra forma
function persona({name, age}: {name:string, age:number}) {
    console.log(`Hola ${name}, tines ${age} años`)
}
persona({name:'Yeltsin', age:25})
//2da forma
function personas(persona: {name:string, age:number}) {
    const {name, age} = persona
    console.log(`Hola ${name}, tines ${age} años`)
}
personas({name:'Yeltsin', age:25})

// tipar función
function tipar(persona: {name:string, age:number}) : string {
    const {name, age} = persona
    console.log(`Hola ${name}, tines ${age} años`)
    return name
}
tipar({name:'Yeltsin', age:25})

// Función como parámetro
// indicamos en el parámetro: que parámetro recibe la función y de que tipo va a devolver
const sayHiFromFunction = (fn:(name:string) => string) =>  {
    return fn('Yeltsin')
}
const sayHi = (name:string) => {
    let retorno = `Hola ${name}`
    console.log(retorno)
    return retorno
}
sayHiFromFunction(sayHi)

// Tipar Arrow-function
//1era forma
const sumar = (a: number, b: number): number => {
    return a + b
}
// 2da forma
const restar:(a: number, b: number) => number = (a, b) => {
    return a - b
}

// Función para errores: never -  nunca devuelve nada
function throwError(messages: string):never {
    throw new Error(messages);
}

// Inferencia en funciones anónimas según el contexto
const avengers = ['Spidey','Hulk', 'Avengers']

avengers.forEach(avenger =>{
    console.log(avenger.toLowerCase())
})