// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ Dates +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 🔴. Dates In JavaScript..............................📙

let myDate = new Date();
console.log(myDate);

console.log(typeof myDate); //=> Object
console.log(typeof Date); // => Function

//📙. Converting to string
console.log("to string : " , myDate.toString());


//📙. More Functions
console.log("to date string : " + myDate.toDateString());
console.log("to ISO-string : " + myDate.toISOString());
console.log("to JSON : " + myDate.toJSON());

console.log("to local date string : " + myDate.toLocaleDateString());
console.log("to local string : " + myDate.toLocaleString());
// Explore many more from the option given by system and explore for more on MDN and follow official documentation


//📙. Declaring a new date

let myCreatedDate = new Date(2026, 8, 31); // Months start from 0 in javascript in case of single digit (Month is 0-based :-> 0-Jan,7-Aug,11-Dec)
console.log(myCreatedDate.toDateString());


// 📙. Another Ways :->
console.log("Another way : ");

// Specific date (recommended ISO format)
const date = new Date("2026-08-26");
console.log(date);


let newdate = new Date(2025, 0, 19, 8, 9);
console.log(newdate.toLocaleString());


console.log("lets try another way :->");

//📙. Format : yyyy -mm-dd

let date1 = new Date("2025-01-25"); //here months start from 1
let date2 = new Date("01-09-2026"); //but in india mostly followed - dd/mm/yyyy
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());


//📙. We do have timestamps in js
let mytimestamp = Date.now(); // in case of desinging quizes ,poles ,etc
console.log(mytimestamp); //gives milisecond values from the date 1 january 1970 to till now

// Extracted value from this value
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));// getting time stamp in seconds... using math.floor to avoid decimals


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //give month ,starting from zero,for giving normal add by 1
console.log(newDate.getDay());
console.log(`Year :-> ${newDate.getFullYear()}`);   
console.log(newDate.getDate());   
console.log(newDate.getHours()); 
console.log(newDate.getMinutes());

// in case we need to write full time 

// `${newDate.getDay()}` //also gives day

//📙. Another method
let newDate1= new Date(2026, 7, 31);
newDate1.toLocaleString('default', {
   weekday: "long"
})

// for print
console.log(newDate1.toLocaleString('default', {
   weekday: "long"
}));
console.log(newDate1.toLocaleString('default', {
   weekday:"short"
}));
console.log(newDate1.toLocaleString('default', {
   weekday: "narrow",
//    month:""     similarly many properties, more practice - make better sense
}));



// 📙. Jitna Jyada Tum explore karoge chijo ko utna hi jyada sense banayega ye............Documentation pe jyada focus karo and more practice.......Explore many other method and practice.. 