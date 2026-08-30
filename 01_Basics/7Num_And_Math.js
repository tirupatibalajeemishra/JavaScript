// 🔴. Numbers and Maths in javascript

// +++++++++++++++++++++++++++++++++++++++++++++++++  Number  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 🔴. Number...................................📙

const score = 455; // Here js have detected that the type of score is number ,implicit way
console.log(score);

// Explicitly defining that the value should be number only...(Means bolna ki hamed number hi chahiye)
const balance = new Number(100); // will give special casting that it is a number   =>Number is a prototype here and given val is primitve value
console.log(balance);


console.log(balance.toString()); // now it converts to string 
console.log(typeof (balance.toString())); 
console.log(balance.toString().length); //will give length after convertig number to string


console.log(balance.toFixed(2)); //suppose if the value is in decimal then it will give the precise value till the positions mentioned as parametres..here value is two=> two position fixed after decimal


const val = 23.8966;
console.log(val.toPrecision(3)); //so it will take starting three values and apply precision on them i.e.,  23.8 =>23.9
const val1 = 123.8966;
console.log(val1.toPrecision(3)); // now the three digits for precision are 123 and kuki after decimal 8 h so it will round off
// but if its is 123.2966 the it will give 123 only

console.log(val1.toPrecision(4));
console.log(val1.toPrecision(5)); // Number that we pass as argument...utne number tk kaa precise value dega
console.log(val1.toPrecision(6));



// Representation - easy
const hundreds = 1000000;
console.log("US-Standard: ",hundreds.toLocaleString()); //add commas  to make representation easy ,,in US-standards 
console.log("Indian-Standard: ",hundreds.toLocaleString('en-IN')); //  commas as per indian style




// +++++++++++++++++++++++++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 🔴. Maths...................................📙

console.log("++++++++++ MATHS ++++++++++++");

console.log(Math); // Basically, it is an object which has many properties , go to console for more values
console.log(Math.abs(-45)); // turns negative to positive
console.log(Math); // Math is Object
console.log(Math.PI); // 3.14
console.log(Math.E); //2.71
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(11)); // 3.31
console.log(Math.pow(2,5)); // 32


// 📙. Round-off values
console.log(Math.round(4.6));
console.log(Math.round(7.4));

// 📙. Ceiling values and floor values
console.log(Math.ceil(4.1)); // as here we have 4.1 that is .1 more than 4 thus it will move to higher value 5 directly
console.log(Math.floor(4.8)); // lowest value hi hega which is 4

// 📙. Min - Max values
console.log(Math.min(2, 9, 0, 23, 12, -2));
console.log(Math.max(74, 0, 48, 55, 92));


// 📙. Math.Random..
console.log(Math.random()); //always give value between 0-1(1 always excluded)

// 📙. What if multiply by 10 
console.log(Math.random() * 10); // Shift by one decimal (Range: 0-9{10 is excluded})

// 📙. If the value is something like 0.03 or 0.04 or etc ,,in such case by multipying by 10 will give 0 thus to avoid it add 1 also
console.log((Math.random() * 10) + 1); // Range: (1-10)
console.log(Math.floor(Math.random() * 10) + 1);

// 📙. Trick (Hacks)
const min = 10;
const max = 20;
// thus we need values bet 10 - 20 ,where min can be atleast 10
// math.floor will give exact lowest value
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Formula for finding random number between any two values.


// Generate Random number between 1 to 100....📙
console.log(Math.floor(Math.random() * 100)+1);
console.log(Math.floor(Math.random() * 100)+1);
console.log(Math.floor(Math.random() * 100)+1);
console.log(Math.floor(Math.random() * 100)+1);
console.log(Math.floor(Math.random() * 100)+1);
console.log(Math.floor(Math.random() * 100)+1);
console.log(Math.floor(Math.random() * 100)+1);

// Generate Random number between 1 to 5....📙
console.log(Math.floor(Math.random() * 5)+1);
console.log(Math.floor(Math.random() * 5)+1);
console.log(Math.floor(Math.random() * 5)+1);
console.log(Math.floor(Math.random() * 5)+1);
console.log(Math.floor(Math.random() * 5)+1);
console.log(Math.floor(Math.random() * 5)+1);

// Generate Random number between 1 to 6 (DICE)....📙
console.log(Math.floor(Math.random() * 6)+1);
console.log(Math.floor(Math.random() * 6)+1);
console.log(Math.floor(Math.random() * 6)+1);
console.log(Math.floor(Math.random() * 6)+1);
console.log(Math.floor(Math.random() * 6)+1);
console.log(Math.floor(Math.random() * 6)+1);

// // Generate Random number between 20 to 25....📙
console.log(Math.floor(Math.random() * 5)+20);
console.log(Math.floor(Math.random() * 5)+20);
console.log(Math.floor(Math.random() * 5)+20);
console.log(Math.floor(Math.random() * 5)+20);
console.log(Math.floor(Math.random() * 5)+20);