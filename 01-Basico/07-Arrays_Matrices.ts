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

