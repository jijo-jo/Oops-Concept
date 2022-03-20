import PersonDetails from "./classPerson";

export default class Teacher extends PersonDetails{
    subject:string;
    school:string;
    salary:number;
    constructor(name:string,age:number,email:string,phone:number,subject:string,school:string,salary:number){

        super(name,age,email,phone);
        this.subject=subject,
        this.school=school,
        this.salary=salary

    }

    teacherDetails():string{
        return `hello i am ${this.name}, i am ${this.age} years old,my email is ${this.email},phonenumber ${this.phone},I am teaching
        ${this.subject} in ${this.school} on slary of ${this.salary} `
    }
}