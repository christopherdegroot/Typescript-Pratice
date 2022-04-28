export interface User {name: string; age: number; occupation: string};

export const users: User[] = [
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

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
}

console.log('Users:');
users.forEach(logPerson);


/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/2/objects.html
*/

export interface Car {model: string; year: number, make: string};

export const cars: Car[] = [
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

export function logCar(car: Car) {
    console.log(`- ${car.year} ${car.make} ${car.model}`)
}

console.log('Cars I have owned: ')
cars.forEach(logCar)