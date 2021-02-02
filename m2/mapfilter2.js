const arr = [
    {id:111,name:"souvik"},
    {id:112,name:"sayak"},
    {id:114,name:"pritam"}
]
const allNames = arr.map((x)=>x.name);
const filterId = arr.filter((x)=> x.id > 111);
const findId = arr.find((x)=> x.id > 111);
console.log(filterId);
console.log(findId);
console.log(allNames);