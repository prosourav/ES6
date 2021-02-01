class Stdent{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "M.B.M.I";
    }
}
const student1 = new Stdent(12,"sourav",);
const student2 = new Stdent(14,"sumit");
console.log(student1,student2);
console.log(student1.name);