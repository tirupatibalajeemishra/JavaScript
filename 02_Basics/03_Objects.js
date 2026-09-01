// 🔴. Objects ..............................................................................................................................📙


// 📙. There are two ways of declaring an object like 1.as a literal & 2.as a constructor

// 📙. Singleton => A kind of object jo poori application me sirf ek hi br bnta hai,

// 📙. for interview point :-> if object made by literals then it is not a singleton and if object made by constructor then it is a singleton...this is a basic diffrence

// 📙.E.g, => 50-60 employees working in a big company uses the same printer...anyone who gives command goes to the same printer..
// koi apna alg printer nhi khareed ta hai,,sb ek hi resource ko share krte h
// Always formed by constructor 


// 📙. Creating object

// 📙. ======> const JsUser ={} :=> creation of this way to any object is known as object literals.
// 📙. OR .other way of creating object is through constructor method => Object.create

const JsUser = {
    name: "Tirupati",
    "full name": "Tirupati Bala Jee Mishra", // Here name act as a key,or key kuch bhi ho skta h,,it cane be like 0,1,2 ...so on instead of name
    // E.g, 1:"tirupati" or a:"shyam" =>in object we can define keys also (index in terms of arrays)
    // Here key => name is treated/processed as "name"  that is string and value of key can be anything like string, number, boolean etc
    age: 22,
    email: "tirupati@google.com",
    location: "varanasi",
    isloggedIn: false,
    lastLoggedIn: ["monday", "saturday"]
}



// 📙. Accessing object
console.log(JsUser);
console.log(JsUser.email); // yaha pe dot(.) ki vjah se string ki trh likhne ki jrurt nhi h email ko
// OR
console.log(JsUser["email"]); // Here we have pass email as string ,bcz as discussed inko as a string process kiya jata h

console.log(JsUser["full name"]) // yaha pe hum dot use kr hi nhi skte....automatic way m khud yahi ek tareeka show ho raha h ...=> try using (jsuser.fullname)  ,,ye khud auto correct ho jaega



// 📙. Declaring a Symbol 

// 📙. Mostly Ask In Interview:-> like take a symbol and in keys of objects and display by printing it.(ek symbol lo use object ke keys me add karo and use print kar ke dikha do)

const mySym = Symbol("key1")
const JS_User = {
    email: "tirupati@gmail.com",
    Name: "BalaJi",
    // mySym: "mykey1", => if i make it as normal then it not work correctly ,,,-> isko agar we print by(JS_User.mySym) then it give type of it is "string". not a symbol, but we need symbol.
    [mySym]: "mykey1",
}; //printing

console.log(JS_User) 
console.log(JS_User.mySym) //=> undefined
console.log(typeof JS_User.mySym) // but still iska type symbol nhi h 
// so uske liye mysym ko [] me likho 
// That is => [mysym] : "mykey1" inside the object JS_User

console.log(JS_User[mySym])
console.log(typeof JS_User.mySym);



// 📙. Changing value of object keys..or Overwrite
JS_User.email = "Balaji@gmail.com";
console.log(JS_User.email);
// 📙. If i want to no one can change the value then we can do it freeze that value, freezing values of object..taki koi value chnge na kr paye


//📙. Adding a new name and value..(Update)
JS_User.gender="male";
console.log(JS_User);

// 📙. Object Freezing
Object.freeze(JS_User); // we freeze JS_User so we cannot change the anu thing in this object

// Now trying to change values
JS_User.email = "lucky@gmail.com"; // This won't change as above we have freezed the object
console.log(JS_User);
console.log(JS_User.email);




// 📙. Creating a another object
const post={
    username:"@tirupati",
    content: "This is my #firstpost",
    likes: 150,
    reposts: 5,
    tags: ["@javascript", "@fullstack"],
};


//📙. Adding a function(greetings) with post
post.greeting = function () {
    console.log("hello Js User");
}
console.log(post.greeting); // =>completely nhi dega bs bolega something is function type
console.log(post.greeting()); 
console.log(post);


// 📙. Create another function
post.greetingTwo = function () { //targeting the username var of post function using $ n this keyword
    console.log(` hello , ${this.username}`)
}
console.log(post.greetingTwo());
console.log(post);




// 📙. Follow Documentation and MDN website to know more........📙