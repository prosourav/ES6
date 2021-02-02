const a = 10;
const b = 12;
const doing = (x,y)=>{
    const re1 =x+y;
    const re2 =x*y;
    return "add result: "+re1 + " "+ "multiplication result: "+re2;
}
const result = doing(a,b);
console.log(result);