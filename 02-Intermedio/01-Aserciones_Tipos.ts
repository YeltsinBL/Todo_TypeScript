const canvas = document.getElementById('canvas') as HTMLCanvasElement

// Tener cuidado porque esto puede falla
const canvas_span = document.getElementById('span')
if(canvas_span !== null){
    const ctx = (canvas_span as HTMLCanvasElement).getContext('2d')
}

// lo recomendable seria usar instancia
const canvas_instance = document.getElementById('span')
if(canvas_instance instanceof HTMLCanvasElement){ // se deduce que este elemento es un HTMLCanvasElement
    const ctx = canvas_instance.getContext('2d')
}