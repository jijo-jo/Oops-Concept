import Boys from "./classBoys";

class Students extends Boys{
    school:string;
    standard:number;
    constructor(name:string,age:number,email:string,phone:number,school:string,standard:number){
        super(name,age,email,phone);
        this.school=school,
        this.standard=standard

    }

    studentDetail():string{
        return `hello i am ${this.name}, i am ${this.age} years old,my email is ${this.email},phonenumber ${this.phone},I am teaching
        studing on ${this.school} in ${this.standard}`
    }
}

export default Students;