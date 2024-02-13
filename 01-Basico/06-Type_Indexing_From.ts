// Type Indexing
type HeroProperties = {
    isActive:boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Trujillo'
}

// Type From Value
const address = {
    planet: 'Earth',
    city:'Trujillo'
}
type Address = typeof address

const addressTwitch: Address = {
    planet: 'Mars',
    city:'Twitch'
}

// Type From function return
function createAddress(){
    return {
        planet:'Tierra',
        city:'Trujillo'
    }
}

type AddressFunction = ReturnType<typeof createAddress>