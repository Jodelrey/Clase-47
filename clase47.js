// Callback
// //Es una funcion que se pasa como argumento
// const sumar = (a,b) => a + b;
// const multiplicar =(a,b) => a*b;
// const restar =(a,b) => a-b;
// const dividir =(a,b) => a/b;

// const llamarFuncion = (funcion) => {
//     console.log(funcion(2,3))
// }
// llamarFuncion(sumar)
// llamarFuncion(restar)
// llamarFuncion(multiplicar)
// llamarFuncion(dividir)

// const duplicar = x => x*2;
// const triplicar = x => x*3;
// const cuadruplicar = x => x*4;

// const operaciones = [duplicar, triplicar, cuadruplicar]
// const otrasOperaciones = [duplicar, duplicar, duplicar]
// const math = [Math.floor, Math.ceil, Math.round]
// const ejectutarOperaciones = (x, operaciones) => {
//     for (let i = 0; i < operaciones.length; i++) {
//         const operar = operaciones[i]
//         const resultado = operar(x)
//         console.log(resultado)
        
//     }
// }
// ejectutarOperaciones(5, operaciones)
// ejectutarOperaciones(8, otrasOperaciones)
// ejectutarOperaciones(5.1, math)

//Los callbacks permiten tener flexibilidad y dinamismo, al tener una funcion que hace algo pero pudiendo especificarlo que quiero que haga

// For...of

//Es un bucle que recorre arrays. Nos permite recorrer arrays de principio a fin
//Sintaxis
 //const numeros = [4, 6, 9, 8, 10, 45, 22];
//  for(let numero of numeros){
//      console.log(numero);
//  }
//  //en este caso numero es el elemento y numeros el array que lo contiene. Para la variable se suele poner el singular del array
//  const ejectutarOperaciones = (x, operaciones) => {
//      for (let operar of operaciones){
//          const resultado = operar(x)
//          console.log(resultado)
//      }
//  }

 //For in
 
 //Cuando lo utilizamos con array, devuelve los indices del array

//  for(let i in numeros){
//      console.log(numeros[i])
//  }

 //For of devuelve los elementos del array
 //For in devuelve indices del array

// if(3 > 5){
//     console.log("3 es mayor a 5")
// } else{
//     console.log("3 es menor a 5")
// }
const siEsTrue = ()=>console.log("3 es mayor a 5")
const siEsFalse = () => console.log("3 es menor a 5")
const comparar = (condicion, fnSiTrue, fnSiFalse) => condicion ? fnSiTrue : fnSiFalse

comparar(3>5, siEsTrue,siEsFalse)

const edad = 19

comparar(
    edad > 18, 
    () => console.log("Puede ingresar"), 
    ()=> console.log("No puede ingresar")
    )

 //EJERCICIOS

 //Crear una función map que acepte un array y un callback y que:
/* por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
obtenga el resultado
lo pushee a un nuevo array
devuelva el array final con el resultado de cada una de las llamadas al callback. */

const numeros = [1, 2, 3]
const duplicar = x => x * 2

const map = (numeros, funcion) => {
    const resultado = [];
    for(let numero of numeros){
        const resultados = funcion(numero)
        resultado.push(resultados)
    }
    return resultado
}

//console.log(map(numeros, duplicar))


//Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".

const numerosFilter = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0

const filter = (numerosFilter, fn) =>{
    const arrayFiltrado = []
    for(let numero of numerosFilter) {
        if(fn(numero)){
            arrayFiltrado.push(numero)
        }
    }
    return arrayFiltrado
}


//console.log(filter(numerosFilter, multiploDe10)) // [10, 40, 50]

//Crear una función every que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si todas las llamadas al callback devolvieron true

const esPositivo = x => x >= 0

const every = (numerosFilter, fn) => {
    let esTrue = true
    for(let numero of numerosFilter) {
        if (!fn(numero)){
            esTrue = false
        }
    }
    return esTrue
}
// console.log(every(numerosFilter, multiploDe10))
// console.log(every(numerosFilter, esPositivo))

//Crear una función some que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si al menos una de las llamadas al callback devolvió true

const some = (arr, fn) => {
    let validacion = false
    for(let numero of arr){
        if(fn(numero)){
        validacion = true
        }
    }
    return validacion
}

// console.log(some([4, 50, 6, 7], multiploDe10))
// console.log(some([-10, -2, -3, -40, -33, -50], esPositivo))


//Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined

const numerosFind = [8, 2, 3, 40, 33, 50]

const find = (arr, fn) =>{
    for(let numero of arr){
        if(fn(numero)){
            return numero
        }
    }
}
//console.log(find(numerosFind, multiploDe10))

//Crear una función findIndex que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined

const findIndex = (arr, fn)=>{
    for(let i in arr){
        if(fn(arr[i])){
            return i
        }
    }
}

//console.log(findIndex(numerosFind, multiploDe10))

//Crear una función dropWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos a partir del primer callback que devolvió false
// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

const numerosDrop = [40, 33, 50, 8, 2, 3, 20]

const dropWhile = (arr, fn)=>{
    let newArray = []
    for(let i in arr){
        if(!fn(arr[i])){
            newArray = arr.slice(i)
            return newArray
        }
    }
   
}

//console.log(dropWhile(numerosDrop, multiploDe10))

//Crear una función takeWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos hasta el primer callback que devolvió false
// (Inverso del dropWhile)

const takeWhile = (arr, fn) =>{
    let arrayConTrue = []
    for(let i in arr){
        if(!fn(arr[i])){
            arrayConTrue = arr.slice(0,i)
            return arrayConTrue
        }
    }
}
console.log(takeWhile(numerosDrop, multiploDe10))