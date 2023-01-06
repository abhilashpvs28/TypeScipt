/*Type Object:
Default typed object
update property
add new property
define a custom type for object
use any with object
*/
// interface users {
//     name:any,
//     name2:string,
//     name3:string,
//     age:number,
//     email:string
// }
var users = {
    name: true,
    name2: "Wyane",
    name3: "Bruce",
    age: 30,
    email: "asd@gmail.com",
    bool: false
};
// users.name = "Shiv";
users.age = 51;
users.name3 = "Romnian";
users.email = "like@gmail.com";
users.name = false;
console.warn(users);
