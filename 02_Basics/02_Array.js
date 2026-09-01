// 🔴. Array Part 2..............................................................................................................................📙

const arrays = ["tirupati", "aditya", "shashwat"];
const dc = ["harsh", "priyanshu", "satyam"];

arrays.push(dc); // Gives array inside array  =>dc will be treated dc as another element in arrays  
console.log(arrays); // this take any type of data as entry, so it take the array as data
console.log(arrays[2]);
console.log(arrays[3]); // Will print array dc as it is third element of arrays
console.log(arrays[3][0]); //give first element of dc-array =>harsh


// 📙. Using Concat() to merge the arrays properly
// 📙. Concat returns a new array
const array = ["tirupati", "aditya", "shashwat"];
console.log("combined array-----------")
const CombineArr = array.concat(dc);
console.log(CombineArr); //=> this make a simple merged array


// 📙. Note:- "Push" make changes in the existing array
// 📙. Note:- "Concate()" is not make changes in the existing array, it can create a new array.



// 📙. Another Way  - can combine more than two 

const arr = [1, 2, 3, 4]
// 📙. Mostly Prefered Way-- spread two arrays =>each element get spread out individually
const allnew = [...array, ...dc, ...arr];
console.log(allnew);



// 📙. Rare Case - Array inside Arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5,[1,2,4]]]];
const real_another_array = another_array.flat(Infinity); // give depth as arguement matlab kitne arguement tkk array ko normalise krna... for now we have do it infinite =>it will solve completely byitself
console.log(real_another_array);

console.log(another_array.flat(2)); // it do concate only till depth 2.



console.log(Array.isArray("hitesh")); // Asking whether it is an array or not, it give true or false
console.log(Array.from("12345")); // Make an array from given value
console.log(Array.from("hitesh")); // if we want to convert any data in array like "hitesh"



// Interesting Case...📙
console.log(Array.from({ name: "tirupati" })); // it give an empty array bcz it is not able to convert this into array,,bcoz isme hume btana pdega ki single characters ka array bnana h ya phir pure naam ko ek array me likhna h //mtlb agr name - "tirupati" toh ek ek char ko ag krke asa element likhna h ya pure naam ko single smjhke


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


// 📙. in "From" :- we take a single value as input and convert it into an array
// 📙. in "to" :- it return an new array from set of element


// 📙. Must prefer the documentation of these topics from official website or MDN......EXPLORE MORE LEARN MORE