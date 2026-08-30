// 🔴. String Methods -->(Explore on MDN)

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


// Explore More on MDN....📙