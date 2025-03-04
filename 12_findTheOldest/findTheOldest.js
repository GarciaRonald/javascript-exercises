const findTheOldest = function(arr) {
    const persons = [];
    const ages = [];

    arr.map(person => {
        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = 2025 - person.yearOfBirth;
        }
        persons.push(person);
        ages.push(person.age);
    });

    const oldAge = Math.max(...ages);
    const oldPerson = persons.filter(person => person.age === oldAge);
    return oldPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;