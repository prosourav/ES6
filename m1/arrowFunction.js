function add( a , b){
    return a+b;
}
const result = add(30 , 5);
console.log(result);

const arrow = ( a, b ) =>  a+b;
const result2 = arrow(30, 15);
console.log(result2);

const arrow2 = ( a, b ) => {
    let sum = a + b;
    let result = sum / 2;
    return result;
}
const final = arrow2(10, 8);
console.log(final);

const  message = () => console.log("hello there!");
message(); 