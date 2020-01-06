"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(person) {
    return "Hello12, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));
/**
 *
 * @param lbb
 * @param hah
 */
function helloTest(lbb, hah) {
    return lbb + hah;
}
exports.default = helloTest;
