// 🔴. String Methods -->(Explore on MDN:-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

const name = "Tirupati";
const repoCount = 4;

// concatenate both 
console.log(name + repoCount + " is my repository count on github");// older way =>not preferred


// instead use back ticks and put your string as ${string here}
console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);


// 📙. Another Way of declaring string
const gameName = new String('Tirupati') //using objects of js and giving value to constructor of string
console.log(gameName);
console.log(gameName[0]); // Accessing zeroth key
console.log(gameName.__proto__); // Will give object ...easy way to see go in console and run


//📙. Strings Methods -->directly available...these string Methods don't change the original value...bcz it takes memory in stack(by copying)..
console.log(gameName.length);
console.log(gameName.toUpperCase()); // but will not change original value
console.log(gameName.charAt(6)); //pass index and check which character was there


// 📙. indexOf
console.log(gameName.indexOf('s')); // will give index of the input character
console.log(gameName.indexOf('i'));


//📙. Dividing a string to a substring
// 📙. substring
const newString = gameName.substring(0, 6) // starting from 0th index to (6-1) index 
console.log(newString);


// 📙. Slice => can give range as input and negative value as well
const anotherString1 = gameName.slice(2, 6);
console.log(anotherString1);

const anotherString2 = gameName.slice(-4, 6);
console.log(anotherString2);

const anotherString = gameName.slice(-8, 6); // -8 = length-8 =-2  => now it will print from index 0 to index 6..... -2 index don't exist thats why it give from 0.
console.log(anotherString)


//📙. Trim and Replace func.      
const newStringOne = "  Hello script  ";  //removing unnecessary spaces
console.log(newStringOne);
console.log(newStringOne.trim()); // visit trim js on MDN docs for more info


const url = "https://tirupati.com/balaJi%26Mishra"; // Browser don't understand spaces in between any url

// Replcing %26 by -
console.log(url.replace('%26', '-'));

// Even we can ask qustions ,whether url include the given data/name or not
console.log(url.includes('Explorer')); // this is ask to url, that given string available or not in url , if available in url then true else false
console.log(url.includes('mishra')); // =>false bcz letter case different
console.log(url.includes('tirupati'));


// 📙. Split
const routine = new String('Explore-More-With-MDN');
/* split => will split the string 
"-" => acts as a separator(we can use anything as seperator)
*/
console.log(routine.split('-')) // Study split more 

const intro = new String('My Name Is Tirupati');
console.log(intro.split(' ')) 
console.log(intro[0]);
console.log(intro[1]);
console.log(intro[3]);

let about =intro.split(' ');
console.log(about[0]);
console.log(about[1]);
console.log(about[3]);


// Explore More on MDN...Explore on MDN:-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String.📙




// 🔴. These Code from Delta (Previous Study Material)...📙

// 🔴. Strings Methods:->

// trim method:->
let msg="     hello         ";
console.log(msg);
console.log(msg.trim());
let temp=msg.trim();
console.log(temp);
console.log(msg);


// toUpperCase() & toLowerCase()
let str="Random String";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);
let str1=(str.toUpperCase());
let str2=(str.toLowerCase());
console.log(str1);
console.log(str2);
console.log(str);


// indexOf():-
let str3="ILovecoding";
console.log(str3.indexOf("I"));
console.log(str3.indexOf("Love"));
console.log(str3.indexOf("o"));
console.log(str3.indexOf("LOVE"));


// MethodChaining(order from left to right)
let str4="iLoveCoding";
console.log(str4);
console.log(str4.toUpperCase().trim());
console.log(str4.toLowerCase().trim());
console.log(str4);
let str5=(str.trim().toUpperCase());
let str6=(str.trim().toLowerCase());
console.log(str5);
console.log(str6);
console.log(str4);


// Slice
let str7="ILovecoding";
console.log(str7);
console.log(str7.slice(5));
console.log(str7.slice(1,5));
console.log(str7);
let str8=(str7.slice(5));
let str9=(str7.slice(1,5));
console.log(str8);
console.log(str9);
console.log(str7);
console.log(str7.slice(-5));// length-num=11-5=6


// Replace
let str10="ILoveCoding";
console.log(str10.replace("Love","do"));
console.log(str10.replace("o","x"));


// // repeat
let str11="Mango";
console.log(str11.repeat(3));
let str12=str11.repeat(3);
console.log(str12);
console.log(str11);