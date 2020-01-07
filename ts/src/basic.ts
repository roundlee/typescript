// let isDone: boolean = true
//console.log(isDone)

// let decimal: number = 6
// let hex: number = 0xf00d
// let binary: number = 0b1010
// let octal: number = 0o744
// console.log(decimal+"\n"+hex+"\n"+binary+"\n"+octal)

// let color: string = "blue"
// color = 'red'
// console.log(color)

// let myName: string = 'round ';
// let myAge: number = 18;
// let sentence = `hello my name is ${myName}.i am ${myAge} years old. 
//                 I'll be ${ myAge + 1 } years old next month`;
// console.log(sentence);

// let list: number[] = [1, 2, 3]
// list.forEach(element => {
//     console.log(element)
// });

// let array: Array<string> = ['roundlee', '23', 'male']
// array.push("softEngineer")
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
// }

// let x: [string, number]
// x = ["age", 23]
// x.push("hight",1.67)
// console.log(x.length)
// console.log(x[0].substring(1))
// console.log(x[0].toString())

// enum Color {Red, Green, Blue}
// let c: Color = Color.Green
// console.log(c)

// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2]
// console.log(colorName)

// let notSure: any = 4
// console.log(notSure)
// notSure = "maybe a string instead"
// console.log(notSure)
// notSure = false
// console.log(notSure)
// console.log(notSure.ifItExists())
// console.log(notSure.toFixed())

// let prettySure: Object = 4
// console.log(prettySure.toFixed())

// let list: any[] = [1, true, "free"]
// list[1] = 100
// list.forEach( item => {
//     console.log(item)
// })

// function warnUser(): void {
//     console.log("the is a warning message")
// }
// warnUser()

// let unusable: void = undefined
// unusable = 
// console.log(unusable)

// let u: undefined = undefined
// let n: null = null
// console.log(u)
// console.log(n)

// function error(message: string): never {
//     throw new Error(message)
// }
// error("something")

// function fail() {
//     return error("Something failed")
// }
// fail()

// function infiniteLoop(): never {
//     while (true) {
//         error("Something faile kkk")
//     }
// }
// infiniteLoop()

// declare function create(o: object | null): void;

// create({ prop: 0})
// create(null)
// create(42)
// create("string")
// create(false)
// create(undefined)

// let someValue: any = "this is a string"
// let strLength: number = (someValue as string).length
// let strLength2: number =( <string>someValue).length
// console.log(someValue)
// console.log(strLength)
// console.log(strLength2)

// let a = [11,22,33]
// console.log(typeof a)
// for (let x in a)
//     console.log(x+ " " + a[x])


