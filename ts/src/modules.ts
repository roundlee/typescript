import { StringValidator } from "./StringValidator"
import validAdd from "./staticAdd"
console.log(validAdd(1, 2))

// export const numberRegexp = /^[0-9]+$/

// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s)
//     }
// }

// let zipCodeValidator: ZipCodeValidator = new ZipCodeValidator()
// console.log(zipCodeValidator.isAcceptable("12345"))
// console.log(numberRegexp.test("123456"))

// export { ZipCodeValidator }
// export { ZipCodeValidator as mainValidator }