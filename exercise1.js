"use strict";
exports.__esModule = true;
exports.logCar = exports.cars = exports.logPerson = exports.users = void 0;
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
;
exports.cars = [
    {
        model: 'Eclipse',
        year: 2003,
        make: 'Mitsubishi'
    },
    {
        model: 'X-Trail',
        year: 2006,
        make: 'Nissan'
    },
    {
        model: 'Golf',
        year: 2008,
        make: 'Volkswagen'
    }
];
function logCar(car) {
    console.log("- ".concat(car.year, ", ").concat(car.make, ", ").concat(car.model));
}
exports.logCar = logCar;
console.log('My favourite cars: ');
exports.cars.forEach(logCar);
