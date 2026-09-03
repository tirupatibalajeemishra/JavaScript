// 🔴. Objects Part 2...............................................................................................................................................📙

// 📙. Previous we already complete the "object literals" , so now we understand the "object singleton"
const tinderUser = new Object(); // Way of creating a singleton object

const tinder = {}; // Must Remaimber, this is a non singleton object and above one is singleton object

// 📙. Adding some properties
tinderUser.id = "123abc";
tinderUser.name = "samay";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(tinder);


// 📙. Nesting of object(objects of object)...
const regularUser = {
    email: "some@gmail.com",
    fullname: { // creating object inside object
        userfullname: {
            firstname: "Tirupati",
            lastname: "Mishra"
        }
    }
}

// 📙. Accesing the objects data..
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lastname) // Gives output => Mishra

// 📙. Here 1,2,3,4 are the keys similar to that of email,fullname, etc in object regular user
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// 📙. Combining them
// Creates Some Problem
const obj3 = {obj1, obj2}
console.log(obj3); // 📙. Here we get the similer problem like array


// 📙. Combining or Copying 
// 📙. See how results are differnet from previous ones
const obj4 = Object.assign({}, obj1, obj2); // Passing an empty parenthesis to get combined value, not imp but good to pass

// 📙. if we give empty {}, this means this{} act as a source and all other objects work as the target........if this{} will not give it in syntax no problem....those is written first in objects syntax, that is treat as the source and other will treat as a targets....📙
console.log(obj4);

// 📙. Study more about object.assign on mdn Web Docs
console.log(obj1)
console.log(obj4 === obj1)


// 📙. But we  will use Something else....i.e., spreading n combine them in obj5....(by using spreading object{...object_name})
const obj5 = { ...obj1, ...obj2 }
console.log(obj5)


// 📙. When values comes from database then it come like this..(Jab bhi database se value aayegi toh vo kuch aise aegi...liekly array of object)
// 📙. Array of Objects
const USERS = [
    { // ye ek object h inside array...aise or bhi objects ho skte h within an array
        id: 1,
        email: "tirupati@google.com"

    },

    {
        name: "tirupati",
        grade: 'A',
        email: "tech@gmail.com"
    }
];
// 📙. Now Accessing the value
// 📙. As users is an array so use sq.braclets with index n then as at index there is an object , so ab us object kisi ek entity ko use krne k liye hum (.) use krege with entity name like email or id or name etc.

console.log(USERS[0]);
console.log(USERS[0].email);
console.log(USERS[1].email);

