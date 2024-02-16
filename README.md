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
- Arrays_Matrices_Tupla
  - Arrays
    - Se debe de tipar para agregar valores.
    - Si se quiere agregar mas de un tipo al array, se debe de poner los tipos dentro de un paréntesis
  - Tupla
    - Tiene un tamaño fijo de longitud del array.
    - Si se requiere que la tupla no se modifique en su longitud, se puede agregar un readonly al momento de crearlo
- Enums
  - Solo existen en TS, no en JS.
  - Se utiliza para una colección de datos finitos y pocos.
  - Si se utiliza el `const` para el enum, este generaría menos código de JS pero, si no se utiliza es crearía como un objeto en JS.

> Nota: utilizar el `const` cuando el proyecto es interno (personal o de un empresa) pero, si se va a utilizar fuera para que alguien lo puede importar, consultar y/o revisar los tipos, es mejor evitar el uso del const.

## 02-Intermedio

- Aserciones_Tipos
  - Se debe de indicar a que tipo de elemento especifico se refiere, porque TS no lo sabe.
  - Al usar TS con HTML no sabe que tipo de elemento va a encontrar y por lo general usa el HTMLElement.

> Nota:
>> Se debe de tener cuidado porque si falla al hacer la aserción puede fallar en la ejecución. Es mas recomendable utilizar el 'instanceof' para indicar el tipo de elemento en HTML.
>>
>> Para utilizar la aserción cuando utilizamos una api, se debe de validar los tipos que recibiremos, por lo cual se puede utilizar una biblioteca para las validaciones de tipos como 'zod' y todo ese código si se ejecuta en JS.

- Interfaces
  - Contrato que define lo que tiene que seguir los objetos y que propiedades y métodos deben tener.
  - Se puede extender los tipos pero no es igual que los types.
  - Todas las interfaces desaparecen cuando se compilan a JS.
  - No se puede declarar los tipos primitivos.
  - Usar las interfaces en las clases u objetos medianamente grandes.

> Nota: en los types no puede tener el misto tipo 2 veces y en las interfaces se puede tener 2 veces la misma interfaz y los extiende automáticamente.

- Narrowing
  - Asegurarse que el tipo que se va a utilizar es el correcto.
