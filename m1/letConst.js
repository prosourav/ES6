const name ="sourav saha";
// name = "rana roy"; (it wont work here)
console.log(name);

const numbers = [10, 12 , 43];
numbers[2] = 34;
numbers.push(22);
// numbers = [10, 12, 34, 22];  it wont work as well
console.log(numbers);

const player = {name: "Ronaldo", phone: 4344};
// player = {name: "Ronaldo", phone: 4344, Nationality: "Portugise"}; wont work
console.log(player);

let studentName = 'Sumit Roy';
studentName = 'khokon Das';
console.log(studentName);
 let sum = 0;
 for( let i = 0; i < 10; i++){
 sum = sum + i;
 }
//  i wont work because let doesn't work outer scope
 console.log(i);