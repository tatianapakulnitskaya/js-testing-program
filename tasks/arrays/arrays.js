/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */

const chars = require('./characters.json');

function getCharactersNames(chars) {
    return chars.map(char => char.name);
}
//console.log(getCharactersNames(chars));

/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    chars.forEach(char => {
        console.log(char.name);
    });
}

//printCharacterNames(chars);

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    return chars.filter(char => char.species != "Human");
}
//console.log(getNonHumanCharacters(chars));

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    //return chars.filter(char => char.name == "Jerry Smith");
    return chars.find(char => char.name === "Jerry Smith");
}
//console.log(getJerryInfo(chars));

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    // const check = value => value === "Human";
    // return chars.every(check);
    return chars.every(char => char.species == "Human");
}
//console.log(isAllHuman(chars));

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    return chars.some(char => char.type == "Fish-Person");
}
//console.log(isAnyFishPerson(chars));

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {

    return arr.indexOf(Math.min.apply(Math, arr));
}
//console.log(minItem([1,2,3,4]));

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};