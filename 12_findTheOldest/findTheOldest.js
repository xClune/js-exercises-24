const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;
    for (i = 0; i < people.length; i++) {
        if ((people[i].yearOfDeath - people[i].yearOfBirth) > oldestAge) {
            oldestAge = people[i].yearOfDeath - people[i].yearOfBirth;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
