

// object destructuring
const person = {name:"sourav", age:17, job:"facebooking", address:"India",phone:123456,friends:["sumon","souvik","sumit"]};

const address = person.address;
const job = person.job;
const {age,friends} = person;
console.log(address,job);
console.log(address,age,friends);
// console.log(address,job);

const complexObject = {name:"abc",info:{
address:"Mumbai",
leader:"Modi"
}}
const {leader} = complexObject.info;
console.log(leader);

// Array destructuring
const players = ["ronaldo", "messi", "zidane", "pogba", "rivaldo"];
const [first, secondOne, ...rest] = players;
console.log(first);
console.log(rest);
