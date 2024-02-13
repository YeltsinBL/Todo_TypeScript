// Arrays
const languages:(string|number)[] = []

languages.push('TypeScript')
languages.push(2)

// Matrices
type CellValue = 'X' | 'O' | ''
type GameBoard =[
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue]
]
const gameBoard:GameBoard =[
    ['X', 'O', 'O'],
    ['X', 'O', 'O'],
    ['X', 'O', 'O']
]

// Tupla
type RGB = readonly [number, number, number]

const black: RGB = [0,0,0]
const white: RGB = [255,255,255]

// black.push(4) // ya no se puede agegar otro valor a la tupla

type Coordinates = [number, number]
const point = [3.14,2.14]

