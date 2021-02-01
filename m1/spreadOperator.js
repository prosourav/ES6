const array = [10, 12, 18, 24];
const array2 = [20, 42, 18, 26, 5];
const array3 = [22, 47];
const allArrays = array.concat(array2).concat(100).concat(array3);
console.log(allArrays);

const allArrays2 = [...array, ...array2, 100, ...array3];
console.log(allArrays2);
const allArrays3 = [array, array2, 100, array];
console.log(allArrays3);

const avi = 22000;
const sumit = 16000;
const khokon = 18000;
const rich = Math.max(avi, sumit, khokon);
console.log(rich);
const money = [22000, 16000, 18000];
const maxvalue = Math.max(...money);
console.log(maxvalue);