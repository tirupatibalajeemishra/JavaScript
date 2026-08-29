let score = 33;
//now we want toknow the type of the score
console.log(typeof score);
console.log(typeof (score));
//but if the value of score is in double quotes then its type will be sting

let Sc = "33";
//"33" will get converted to 33
console.log(typeof Sc); //=>string

//suppose we want to convert the value of Sc from string to number

let valueInNumber = Number(Sc); //now the sc is converted into number for sure
console.log(typeof (valueInNumber)); //=>number

//if the value of the variable is something liek this...number and alphbets
let val = "33abc"
let value = Number(val);
console.log(typeof value); // =>also gets xonverted to number , although its not number
console.log(value); //=>NaN -Not a Number

console.log("If the value of variable is null then its type and its values are:");
let age = null; //if a variable is null
console.log(typeof age);
let x = Number(age); //value when its being converted to number
console.log(x);
// if variable is undefined =>NaN
//If variable has value true =>1
//if false the => 0
// if there is a string in the variable then it cant be converted to number thatswhy will give NaN

let mark = "tirupati";
let mark1 = Number(mark);
console.log(mark1); //=> NaN

//more conversions
let isLoggedIn = 1; //convert it to boolean , 1=>true and 0 =>false
console.log("the boolean value of 1,0 is: ");
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn)
// "" =>a empty string will give false
// "varnika" => a non-empty string will give true

//converting to string
let num = 26;
let StringNum = String(num);
console.log(StringNum);

console.log(typeof StringNum) //=> gives type string1
