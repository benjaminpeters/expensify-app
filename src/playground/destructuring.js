//
// Object Destructuring
//


// const person = {
//     name: 'Ben',
//     age: 28,
//     location: {
//         city: 'Toronto',
//         temp: 24
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature){
//     console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Toronto', 'Ontario', '90210'];
// const [, city, province = 'Nova Scotia'] = address;
// console.log(`You are in ${city} ${province}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [menuitem, , medium] = item;

console.log(`A medeium ${menuitem} costs ${medium}`);