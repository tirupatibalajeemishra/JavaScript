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


