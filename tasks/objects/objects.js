const {
    getFullName
} = require("../functions/functions");

/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = //put you object here
    {
        firstName: 'John',
        lastName: 'Doe',
        getFullName: function () {

            return this.firstName + " " + this.lastName;

        }
    };
//console.log(person.getFullName());

//console.log(person.firstName);
//console.log(person.getFullName());

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
//const student = Object.create(person);
const student = {
    grade: 1,
    getGrade() {
        return this.grade;
    }
};
Object.setPrototypeOf(student, person);
//console.log(student.firstName);   //put you object here

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); //put you object here

module.exports = {
    person,
    student,
    student2
};