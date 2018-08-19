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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName)