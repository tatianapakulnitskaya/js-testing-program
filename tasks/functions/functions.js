/**
 * write function that adds two numbers
 *
 */

function add(a, b) {
	var result = a + b;
	return result;
}
//console.log(add(2, 3));

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */

var person = {
	firstName: "John",
	lastName: "Dou"
};

function getFullName(object) {
	return object.firstName + " " + object.lastName;
}
//console.log(getFullName(person));

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */

function isOdd(n) {
	if (n % 2 == 0)
		return false;
	else
		return true;
}
//console.log(isOdd(3));

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */

function getShortest(wordArray) {
	let shortest = wordArray[0];
	for (i = 1; i < wordArray.length; i++) {
		if (wordArray[i].length < shortest.length)
			shortest = wordArray[i];
	}
	return shortest;
}
//console.log(getShortest(["one", "two", "three"]));


/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */

function getGoogle(n) {
	let String = "ggle";
	let ToAdd = "o".repeat(n);
	let Position = 1;
	let newString = String.slice(0, Position) + ToAdd + String.slice(Position);
	return newString;
}
//console.log(getGoogle(5));

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */

function getUser(firstName = null, lastName = null, age = null) {
	var object = {
		firstname: firstName,
		lastname: lastName,
		age: age
	};
	return object;
}
//console.log(getUser("John", "Dou", 42));

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

var path = [{
		direction: "Kiyv - Minsk",
		distance: 567
	},
	{
		direction: "Kiyv - Paris",
		distance: 2402
	}
];

function getTotalPath(path) {
	let total = 0;
	for (i = 0; i < path.length; i++) {
		total = total + path[i].distance;
	}
	return total;
}
//console.log(getTotalPath(path));

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 */

function discountFunction(amount) {
	return function (percentage) {
		return percentage - amount * percentage * 0.01;
	};
}
//const discountFunction10 = discountFunction(10);
//console.log(discountFunction10(90));

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		//write your code here
		Object.keys(this).forEach(function (key) {
			console.log(key);
		})

	},
	call() {
		//write your code here
		let str;
		return srt = "My name is " + this.name + " " + this.lastName + " and I am " + this.age + " years old. My best friend is " + this.friends[2];
	}
};
//myObject.keys();
//myObject.call();


module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};