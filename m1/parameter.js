// old js
function sum(a, b){
    b = undefined || b || 20;
    return a+b;
}
const result = sum(3);
console.log(result);

// ES-6
function add(a, b = 20){
    return a+b;
}
const adding = add(3);
console.log(adding);