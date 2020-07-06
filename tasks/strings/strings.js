/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (isNaN(str)) {
    return str.split("").reverse().join("");

  } else {
    return "This is not a string!";
  }
}
//console.log(reverseString(9));


/**
 * 1. Calculate a century by given year
 * if a number is passed
 * @param {number} year
 */
function centuryFromYear(year) {
  if (year <= 0) {
    return "Not allowed value for year";
  } else {
    return Math.floor((year - 1) / 100) + 1;
  }

}
//console.log(centuryFromYear(-10));

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  return str.split(char).length - 1;
}
//console.log(strCount("hello","k"));
/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num - str.length) + "...";
  } else if (str.length <= num) {
    return str;
  }
}
//console.log(truncateString("hahaha",5));

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  return text.replace(/10/g, 'ten');
}
//console.log(replace10("231054"));

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  return text.replace(/(?<=\[).+?(?=\])/g, 'CONFIDENTIAL');
}
//console.log(replaceConfidential("lorem [ipsum] si dolor"));

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};