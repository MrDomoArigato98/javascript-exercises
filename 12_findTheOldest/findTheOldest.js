const findTheOldest = function(people) {
    
    const getAge = function (birth, death) {
        if (!death) {
          death = new Date().getFullYear();
        }
        return death - birth;
      };

    let maxAge = 0;
    let oldest;
    people.map(function(person){
        let personAge = getAge(person.yearOfBirth,person.yearOfDeath)
        if(personAge > maxAge){
            oldest = person;
            maxAge = personAge
            console.log(oldest)
        }
    })
    console.log(oldest)
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
