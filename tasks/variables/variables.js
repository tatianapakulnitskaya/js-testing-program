/**
 * TODO create variable named int and set value equal to 1
*/
let int = 1;
/**
 *  TODO create variable named int2 and set value equal int plus 1
 */
let int2 = int+1;
/**
 * TODO create variable named str and set value equal to "John"
 */
let str = 'John';
/**
 * TODO create variable named str2 and set value equal str plus " Dou"
 */
let str2 =str + ' Dou';
/**
 * TODO create variable named bool and set value equal to comparison of int and int2 variables
 */
let bool = int==int2;
/**
 * TODO create variable named arr and set value array of numbers from 1 to 5
 */
let arr = [];
for (let i = 1; i < 6; i++) {
  arr[i] = i;
}
/**
 * TODO create variable named fifth and set value as element of array with index 4
 */
let fifth = arr[4];
/**
 * TODO create variable named human and set value as object with key firstName and value "John"
 */
let human = {firstName: "John"};
/**
 * TODO set new key of human object named lastName and value "Dou"
 */
human.lastName = "Dou";
/**
 * TODO set new key of human object named fullName and value of concatenation of firstName and lastName values
 */
human.fullName = human.firstName.concat(human.lastName);
