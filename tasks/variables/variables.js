/**
 * TODO create variable named int and set value equal to 1
*/
var int = 1;
/**
 *  TODO create variable named int2 and set value equal int plus 1
 */
var int2 = int+1;
/**
 * TODO create variable named str and set value equal to "John"
 */
var str = 'John';
/**
 * TODO create variable named str2 and set value equal str plus " Dou"
 */
var str2 = str + ' Dou';
/**
 * TODO create variable named bool and set value equal to comparison of int and int2 variables
 */
var bool = int==int2;
/**
 * TODO create variable named arr and set value array of numbers from 1 to 5
 */
var arr = [];
for (var i = 1; i < 6; i++) {
  arr[i] = i;
}
/**
 * TODO create variable named fifth and set value as element of array with index 4
 */
var fifth = arr[4];
/**
 * TODO create variable named human and set value as object with key firstName and value "John"
 */
var human = {firstName: "John"};
/**
 * TODO set new key of human object named lastName and value "Dou"
 */
human.lastName = "Dou";
/**
 * TODO set new key of human object named fullName and value of concatenation of firstName and lastName values
 */
human.fullName = human.firstName.concat(human.lastName);
