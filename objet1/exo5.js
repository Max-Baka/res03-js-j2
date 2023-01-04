/*let student = {
    firstName : "Smaks",
    Age : 33,
    average : 12
};
console.log(student.firstName);
console.log(student.Age);
console.log(student.average);
*/
/*
let student = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 8],
    average : 0
};

student.average = (12 + 14 + 8) /3;
console.log(student.average);
*/

let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];
for (student of students)
{ console.log(`${student.name} is ${student.age} years old and has a average of
${student.average}. `);
}