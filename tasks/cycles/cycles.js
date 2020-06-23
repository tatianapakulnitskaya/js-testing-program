/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount; 
//PLACE YOUR CODE HERE
  if (redemption>=0 && redemption<350){
    discount=0;
  } else if (redemption>=351 && redemption<1350){
    discount=15;
  } else if (redemption>=1350 && redemption<2700){
    discount=30;
  }else if(redemption>=2701 && redemption<6500){
    discount=45;
  }else if(redemption>=6501 && redemption<9999){
    discount="not applicable discount";
  }else{
    discount="not applicable sum";
  }
  return discount;
  
}
//console.log(calculateDiscount(9999)+" %");
/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
    const i = 10; //10! = 3628800
    var k;
    var factorial1=1;
  for (k=1; k<= i; k++)
      factorial1 = factorial1*k;
      //console.log(factorial1);
}

{
  const i = 10; //10! = 3628800
  var factorial2=i;
  var k = i-1;
while (k > 0) {
  factorial2=factorial2*k;
  k--;
}
//console.log(factorial2);
}

{
  const i = 10; //10! = 3628800
  var k=1; 
  var factorial3=1;
do
    {
      factorial3=factorial3*k;
        k++;
 
    }
 while(k<=i);
 //console.log(factorial3);
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  var str = "";
for (var i = 0; i < substr.length; i++) {
  str += substr[i];
}
//console.log(str);
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };

let total = 0;
for (let income of Object.values(personIncomes)){
  total += income;
}
//console.log(total);
}

module.exports = calculateDiscount;
