interface IAvenger {
    readonly name: string
    powerScore: number
    readonly wonBattles: number
    age: number
}
class Avenger implements IAvenger{
    // Propiedades 
    readonly name: string
    powerScore: number
    readonly wonBattles: number = 0
    age: number
    #privado:string
    protected protection: number = 0 // acceder a ella desde una clase heredada

    constructor(name:string, powerScore: number){
        this.name = name
        this.powerScore=powerScore
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }
    set power(newPower: number) {
        if(newPower <= 100){
            this.powerScore = newPower
        } else {
            throw new Error("Power score no debe ser mayor a 100");
            
        }
    }
}
 
const avenger = new Avenger('Hulk',90)