interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello12, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user))
/**
 * 
 * @param lbb 
 * @param hah 
 */
function helloTest(lbb:string,hah:number):any{
    return lbb+hah
}
export default helloTest