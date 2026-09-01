// 🔴. Array..............................................................................................................................📙

// 📙. Arrays => Go on arrays js mdn
const myArray = [0, 2, 3, 64, 21, true , "tirupati"];
// 📙. Study concept of shallow and deep copy on mdn site
console.log(myArray[0]); // =>0
console.log(myArray[5]); // =>true
console.log(myArray[6]); // =>tirupati


// 📙. Shallow Copy: Creates a new array, but nested arrays/objects are still connected to the original, Means if i copy a array 'A' to array 'B', then if i change something in array "A" then already change occur in array 'B' also....bcz both are share the same reference.

// 📙. Deep Copy: Creates a new array where nested arrays/objects are also completely copied, Means if i copy a array 'A' to array 'B', then if i change something in array "A" then change in 'A' is only occur in 'A' not in array 'B', bcz both are not share the same reference. Copy is created seperately..


//📙. Second way to Declare
const students = ["tirupati", "aditya", "shashwat", "priyanshu"];
console.log(students);
console.log(students[1]);
console.log(students[3]);


//📙. Third way to declare
const myArr = new Array(1, 2, 4, 35, 8); // => this array is not a normal array, it is created Using Array constructor, i.e, new array(5) :-> it creates an array with 5 empty slots, not an array containing 5.
console.log(myArr[3]);



// 📙. Array Methods..................................................📙
// 📙. Push() ->
myArr.push(209); // Add values to Array..from backward
console.log(myArr);
myArr.push(7);
console.log(myArr);

// 📙. pop() ->
myArr.pop();// To delete the value from last =>no need to give arguement
console.log(myArr);

// 📙. unshift() ->
myArr.unshift(11); // it is used to insert new elemnts at start and thus needs to shift the rest elements, sounds hectic when array is large sized, Bcz each element needs to be shift by one place
console.log(myArr);

// 📙. shift() ->
myArr.shift(); // it is used to remove the element from start
console.log(myArr);
myArr.shift();
console.log(myArr);


//📙. More Concepts

// 📙.include() :->
console.log(myArr.includes(2)); // Whether arr includes val =2 or not =>give boolean answers

// 📙. indexof() :->
console.log(myArr.indexOf(5)); // it give the index of element =5     (returns either 1 or -1)
console.log(myArr.indexOf(8)); 


const newArr = myArr.join();
console.log(myArr); //=>this is the previous array, [ 2, 4, 35, 8, 209 ]
console.log(newArr); //-> this is the new array, 2,4,35,8,209


console.log(typeof myArr); // Object
console.log(typeof newArr); // String, Join converted into string


// 📙. Slice, Splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // Returns a section of array
console.log(myn1);


console.log("B", myArr);


const myn2 = myArr.splice(1, 3); // changed original array

console.log(myn2);
console.log("C", myArr); // Original array is changed here, Splice parts are remove from original array




// Explore More on MDN...Explore on MDN.......📙




// 🔴. These Code from Delta (Previous Study Material)...📙

// Array Basics:->
let students3=["aman","shradha","rajat"];
console.log(students3[0]);
console.log(students3[1],students3[2], students3[4]);
console.log(students3);
console.log(students3.length);
let arr=[45,48,56,25,35];
let info=["aman",45,5.8];// mixed array
console.log(info[0]);
console.log(info[0][0],info[0][3]);
console.log(info[0].length);

// empty array
let newArr4=[];



let fruits=["mango","apple","litchi"];
console.log(fruits);
fruits[2]="banana";
console.log(fruits);
fruits[9]="pineapple";
console.log(fruits);


// Array Methods:---->

// Push(), pop(), unshift(), shift().....📙📙
let cars=["audi","toyota","landrover","landcruser","BMW"]
console.log(cars);
cars.push("farari");
cars.push("maruti");
cars.push("mahindra");
console.log(cars);
console.log(cars.pop()); // ye pop jo hai bs delete nhi karta ye return bhi karta hai
console.log(cars);
cars.unshift("Defender");
console.log(cars);
cars.shift();
console.log(cars);



// indexOf(), includes().....📙📙
let cars1=["audi","toyota","landrover","landcruser","BMW"];
console.log(cars1);
console.log(cars1.indexOf("toyota"));
console.log(cars1.indexOf("BMW"));
console.log(cars1.indexOf("bmw"));

console.log(cars1.includes("audi"));
console.log(cars1.includes("landcruser"));
console.log(cars1.includes("landCruser"));



// concat, reverse.....📙
let primary=["red","yellow","blue"];
let secondary=["orange","green","violet"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));
let temp=primary.concat(secondary);
console.log(temp);

console.log(primary.reverse());
let tem=secondary.reverse();
console.log(tem);
console.log(primary); // ye original wala bhi change ho jata hai
console.log(secondary);



// slice (copies a portion of an array).....📙
let cars3=["audi","toyota","landrover","landcruser","BMW"];
console.log(cars3.slice());
console.log(cars3.slice(2));
console.log(cars3.slice(2,4));
console.log(cars3.slice(-2));



// splice: removes,replaces,add elements in place.....📙
// splice(start,deletecount,item0...itemN).....
let colors=["red","yellow","blue","orange","pink","white","black","green","yellowgreen","brown"];
console.log(colors);
console.log(colors.splice(5)); // means ye normally slice wale jaisa kaam karega...
console.log(colors);
console.log(colors.splice(0,1)); // start and deletecount mil gya .....mtlb start 0 index se hoga and 1 digit delete karegaa
console.log(colors);
console.log(colors.splice(0,3)); // ab red ht chuka hai upar wale line ke wajah se....to red ke aage 3 jo hai unke delete kar degaa
console.log(colors);
console.log(colors.splice(0,1,"aqua","grey")); // pahle ko hata ke delete kar de
console.log(colors);
console.log(colors.splice(1,0,"skyblue"));
console.log(colors);



// sort: sorts an array📙
let days=["monday","sunday","wednesday","tuesday"];
console.log(days);
console.log(days.sort()); // ye real array me change karegaa...
console.log(days); // ye sorted array degaa

let squares=[25,16,4,36,9];
console.log(squares);
console.log(squares.sort());
console.log(squares);



// Practice question.....->📙
// 1.->(chage start to end using only splice)....
// start: ['january','july','march','august'];
// end: ['july','june','march','august'];
let start= ['january','july','march','august'];
console.log(start);
start.splice(0,1);
console.log(start);
start.splice(1,0,"june");
console.log(start);


// upar wala task ek line me kar de
let start1= ['january','july','march','august'];
console.log(start1);
start1.splice(0,2,"july","june");
console.log(start1);


// Nested Arrays->>(multidimentional array)...📙
let nums=[[2,4,4],[3,6],[4,6,8,5]];
console.log(nums);
console.log(nums[0].length);
console.log(nums[2].length);
console.log(nums[2][2]);