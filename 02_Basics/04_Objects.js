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
