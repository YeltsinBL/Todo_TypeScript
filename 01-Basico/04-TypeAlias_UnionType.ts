// Template union type
type Hexadecimal = `#${string}`
const color2: Hexadecimal = '#0033ff'
// const color:Hexadecimal = '0033ff' // da error porque no tiene el mismo tipo de string

type HeroId = `${string}-${string}-${string}-${string}-${string}` 

// union type
type HeroPowerScale = 'local' |'planetary'|'galactic'|'universal'

// Creación de un Tipo
type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScale
}

function createHero(hero:Hero): Hero {
    const {name, age} = hero
    return {
        id: crypto.randomUUID(),
        name, age, isActive:true}
}

const thor = createHero({name:'Thor', age: 15000})
thor.id?.toString()
thor.powerScale = "planetary"