//normal Object

// var objextdf = {
//     "id": 1,
//     "name": "Kumar",
//     "lastname": "Sanu",
//     "state": "Ap",
//     "Country": "India"
// }

// console.log(objextdf);

//nested Object

// var nstdobj = {
//     "id": 202,
//     "name": "Ranu",
//     "lastname": "sinha",
//     "nfer": {
//         "first": "ambika",
//         "last": "sinha",
//         "hil": "top",
//         "lime": "Fruit"
//     }
// }

// console.log(nstdobj.nfer.first);

//array in an object:

var likeobj = {
    "id": 12,
    "first": "like",
    "last": "mike",
    "nfer": {
        "first": "ambika",
        "last": "sinha",
        "hil": "top",
        "lime": "Fruit"
    },
    "poid": ["Roman", "shiv", "kendal", "logan", "tom", "greg", "frank", "noah"]

}

console.log(`my name is ${likeobj.poid[2]} and my pay role id is ${likeobj.id}`)