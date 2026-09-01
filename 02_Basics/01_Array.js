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

