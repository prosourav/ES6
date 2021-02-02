const num = [4, 5, 6, 8];
for(let i = 0; i < num.length; i++){
    const op = num[i];
    const result = op * op; 
    console.log(result);
}

// normal function
const  result = (x)=> {
    for(let i = 0; i < x.length; i++){
        const op = x[i];
        const res = op * op;
        console.log(res);
    }
};
result(num);

const number = num.map((x)=> x *  x);
console.log(number);

const bigger = num.filter((x)=> x > 5);
console.log(bigger);

const answers = num.find((x)=> x > 5);
console.log(answers);

// x= element, y=index, z=array
const number2 = num.map((x, y, z)=>{
 console.log(x, y, z);
});
