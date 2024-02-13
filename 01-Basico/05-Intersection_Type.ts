type HeroId = `${string}-${string}-${string}-${string}-${string}` 

// union type
type HeroPowerScale = 'local' |'planetary'|'galactic'|'universal'

// Creación de un Tipo
type HeroBasicInfo={
    name: string
    age: number
}
type HeroProperties = {
    readonly id?: HeroId
    isActive?: boolean
    powerScale?: HeroPowerScale
}

// Intersection Type
type Hero = HeroBasicInfo & HeroProperties

function createHero(input: HeroBasicInfo): Hero {
    const {name, age} = input
    return {
        id: crypto.randomUUID(),
        name, age, isActive:true}
}

const thor = createHero({name:'Thor', age: 15000})
thor.id?.toString()
thor.powerScale = "planetary"