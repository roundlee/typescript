//var keyword 

// function f() {
//     var a = 10
//     return function g() {
//         var b = a + 1
//         return b
//     }
// }

// var g = f()
// console.log(g())

// function f() {
//     var a = 1

//     a = 2
//     var b = g()

//     return b
    
//     function g() {
//         return a 
//     }
// }
// console.log(f())

// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10
//         //x = 10
//     }

//     return x 
// }

// console.log(f(true))
// console.log(f(false))

// function sumMatrix(matrix: number[][]){
//     var sum = 0
//     for (var i = 0; i < matrix.length; i++){
//         var currentRow = matrix[i]
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i] 
//             console.log(sum)
//         }
//     }
//     return sum
// }
// var matrix: number[][] = [[1,1],[2,2]]
// console.log(sumMatrix(matrix))

// for (var i = 0; i < 10; i++){
//     setTimeout(function(){console.log(i) }, 1000*i)
// }

// for (var i = 0; i < 10; i++) {
//     (function(i) {
//         setTimeout(function() {console.log(i); },
//          100 * i)
//     })(i)
// }

// let hello = "hello"

// function f(input: boolean) {
//     let a = 100

//     if (input) {
//         let b = a + 1
//         return b 
//     }

//     return b 
// }
// console.log(f(true))
// console.log(f(false))

// try {
//     throw "oh no"
// }
// catch (e) {
//     console.log("oh well")
// }
// console.log(e)//errro

// a++
// let a
// console.log(a)//NaN

// function f(condition: boolean, x: number) {
//     if (condition) {
//         let x = 100
//         return x 
//     }

//     return x 
// }

// console.log(f(false, 0))
// console.log(f(true, 0))

// function sumMatrix(matrix: number[][]) {
//     let sum = 0
//     for (let i = 0; i < matrix.length; i++){
//         var currentRow = matrix[i]
//         for (let i = 0; i < currentRow.length; i++){
//             sum += currentRow[i]
//         }
//     }
//     return sum 
// }
// let matrix: number[][] = [[1,1], [2,2]]
// console.log(sumMatrix(matrix))

// function theCityThatAlwaysSleeps() {
//     let getCity

//     if ( true ) {
//         let city = "shanghai"
//         getCity = function() {
//             return city 
//         }
//     }
//     return getCity
// }
// console.log(theCityThatAlwaysSleeps())

// for (let i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i) }, 100*i)
// }

// const numLivesForCat = 9
// const kitty = {
//     name: "Auora",
//     numLives: numLivesForCat,
// }

// kitty.name = "Roty"
// kitty.numLives--;
// console.log(kitty.name+" "+kitty.numLives)

// let input = [1, 2]
// let [first, second] = input
// console.log(first)
// console.log(second)
// first = input[0]
// second = input[1]
// console.log(first)
// console.log(second)

// function f([first, second]: [number, number]) {
//     console.log(first)
//     console.log(second)
// }
// f([1, 2])

// let tuple: [number, string, boolean] = [1, "holle", true]
// let [a,b,c] = tuple
// console.log(a+b+c)
// let [a,b,c,d] = tuple
// console.log(a,b,c,d) 
// let [a] = tuple
// let [,b] = tuple
// console.log(a,b)

// let o = {
//     a:"round",
//     b:23,
//     c:"lee"
// }
// let {a,b} = o
// console.log(a+""+b)

// ({a,b} = {a: "lee", b: 101})

