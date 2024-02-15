interface Hero {
id:string,
name:string,
age: number,
saludar:()=>void
}
const hero: Hero ={
    id:'1',
    name:'Yeltsin',
    age:26,
    saludar:() =>{
        console.log('Hola')
    }
}

// interfaces anidadas
interface Producto {
    id:number,
    nombre: string,
    precio: number,
    quantity: number
}
interface Zapatilla extends Producto {
    talla:number
}
interface CarritoDeCompras {
    totalPrice: number,
    productos: (Producto | Zapatilla)[]
}
const carrito: CarritoDeCompras = {
    totalPrice:100,
    productos: [{
        id: 1,
        nombre: 'Producto 1',
        precio: 10,
        quantity: 1,
        talla: 40
    }]
}

// Métodos en interfaces
interface CarritoOps {
    add:(product:Producto)=>void
    remove:(id:number)=>void
}
// extender automáticamente una interfaz
interface CarritoOps {
    clear:()=> void
}

const ops: CarritoOps = {
    add: (product: Producto) =>{},
    remove: (id:number) =>{},
    clear: () => {}
}