//🔴.Datatypes Summary...........📙

// 📙. On the basis of how data is stored in memory and how it can be accessed ,, datatypes are divided into two categories :-

//📙. 1. PRIMITIVE (Call By Value) AND 2. NON-PRIMITIVE(Refehttps://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=29&pp=iAQBrnce type)

//📙.PRIMITIVE :=> 7 categories =>String, Number, Boolean, null, undefined, Symbol(used to make a value unique ), BigInt 

// 📙. Primitive Datatypes=> it is a given as "call by value"..mtlb isme ham jab bhi koi change karte hai to hame memory kaa reference nhi diya jata...hame copy kar le diya jata hai..jo change karte hai to exact original me change nhi hota, copy me change hota hai.

console.log("**************DATATYPES SUMMARY******************");

const score = 100; //number
const scoreValue = 100.36; //number
const isLoggedIn = false; //boolean
const outSideTemp = null; //null -> null means not 0,it is empty.(kuchh mila hi nhi)
let userEmail; //simply undefined for now  or can manually do it undefined
// let userEmail= undefined; // manually bhi undefined kar sakte hai

const id = Symbol('1234'); // for making id unique ,use symbol , pass the value in it and it will return a new unique symbol value
const anotherid = Symbol('1234'); //although values of both ids are same but both are unique as due to symbol

// lets check whether above two are equal or not
console.log("whether id and anotherid are equal or not");
console.log(id);
console.log(anotherid);
console.log(id == anotherid); // both are not equal
console.log(id === anotherid);

//BigInt
const bigNumber = 243433562353267n; // Automatically used bigInt to store this large num or if num is too large then add 'n' after the num...


// 📙. NON-PRIMITIVE (Reference type) : Arrays, Functions, Objects

// 📙. Arrays
const heroes = ["Saktiman", "Naagraj", "Doga"];
console.log(heroes);

// 📙. Objects => in curly braces
let myObj = {
    name1: "suraj",
    name2: "varnika", //all are objects ,they can be of any datatype
    age: 42,
    course: "B.Tech"
};

// 📙. Functions
// storing func in a variable

const myfunc = function () { // this function is stored in "myfunc" variable
    console.log("Hello World!");
}


// 📙. How to find datatype of anything
console.log(typeof bigNumber); // give bigint
console.log(typeof outSideTemp); //=> object

console.log(typeof myfunc); // =>function but called as object function 
console.log(typeof anotherid) //symbol
console.log(typeof heroes) //object=> datatype of array and object is called as object, and of function is give as function but really called as object function..


myfunc(); // function call=> all things in function execute here




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 🔴. MEMORY............................📙
// 📙 1. Stack (all primitive datatype use stack memory) => A copy is created..(when we use stack memory then we got copy of which i declare)
// 📙 2. Heap (all Non-primitve datatype use stack memory) => A refernce to the original value i.e., changes can be made to original value 

let myYoutubeName = "ExplorerDotCom";
let anothername = myYoutubeName;

anothername = "Simple Thinks";
console.log(anothername); //changed to Simple Thinks
console.log(myYoutubeName); // stick to old value => ExplorerDotCom .....bcoz here copy of variable myYoutubeName is passed to anothername,,,,thats why origial value don.t get affected


// 📙 Advanced datatype - Objects 
// User1 is primitive but value inside it are objects that are stored in heap...
let user1 = {  //will copy and get into heap
    email: "user@gmail.com",
    upi: "user@ybl",
};

let user2 = user1;
// Taking value from user1 thus user2 or user1 pointing to same data

user2.email = "tirupati@google.com";
console.log(user1.email);
console.log(user2.email);
// both give same value...bcz both are pointing toward same reference thats why if we change the by user2 that exacct change the reference data ....so user1 is also changed.



// 🔴. Must refer the documentation of ECMA js site....and also prefer MDN.