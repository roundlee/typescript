function identity<T>(arg: T): T {
    return arg 
}

let myIdentity: <T>(arg: T) => T = identity;
console.log(myIdentity)
// let output = identity<string>("myString")
// console.log(output)