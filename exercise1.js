"use strict";
exports.__esModule = true;
exports.logPerson = exports.users = void 0;
;
exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/2/objects.html
*/
