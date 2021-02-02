const num = [1,2,3,4,5,6,7,8];
const part1 = num.slice(2,5);
console.log(part1);
console.log(num);

const num2 = [1,2,3,4,5,6,7,8];
const part2 = num2.splice(2,5);
console.log(part2);
console.log(num2);

const num3 = [1,2,3,4,5,6,7,8];
const part3 = num3.splice(2,5,555);
console.log(part3);
console.log(num3);


// it will join with every element but it will make string
const together = num.join("ami ");
console.log(together);