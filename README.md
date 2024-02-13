# Todo_TypeScript

Aprendiendo todo sobre TypeScript

- No funciona en tiempo de ejecución, sino en compilación.
- Se escribe mas código, añadiendo mas seguridad.

## 01-Basico

- Tipos
  - Es fuertemente tipado, infiriendo el tipo de dato.
  - El tipo `any` se salta el type checking y se debe de evitar utilizarlo
  - El `unknown` no se sabe el tipo de dato.
  - El `union type` indica que la variable puede ser de uno u otro tipo.
- Funciones
  - Se escriben igual que JavaScript.
  - Se le tiene que decir de que tipo es el parámetro cuando no tiene contexto.
  - Se puede tipar la función.
  - En la función como parámetro, se debe de indicar de que tipo es el parámetro y el retorno, si no retorna nada se pone `void`, de lo contrario se agrega cualquier otro tipo.

> Nota: El `void` normalmente decimos que dicha función "no devuelve nada", devuelve. Normalmente ignoramos el valor de retorno en estos casos. El `never` no tiene una finalización normal, lo que significa que arroja un error o nunca termina de ejecutarse.

- TypeAlias
  - Para crear los propios, se deben se hacer en PascalCase.
- TypeAlias_UnionTye
  - Se puede crear unos tipos para usarlo dentro de otros tipos (template union types).
  - No valida datos pero si se puede decir el tipo de cadena de texto que se requiere.
- Intersection_Type
  - Extender los tipos, crear tipos uniéndolos con otros tipos.
- Type_Indexing_From
  - Type Indexing: Permite reutilizar tipos que ya se hayan creado.
  - Type From: el 'typeof' permite extraer los tipos de un objeto e incluso funciones (usando el ReturnType) para crear otros tipos.
- Arrays_Matrices
  - Arrays
    - Se debe de tipar para agregar valores.
    - Si se quiere agregar mas de un tipo al array, se debe de poner los tipos dentro de un paréntesis
