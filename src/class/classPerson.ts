import Person from "../interfaces/interfacePerson";

export default class PersonDetails implements Person{
    name:string;
    age:number;
    email:string;
    phone:number;

    constructor(name:string,age:number,email:string,phone:number){
        this.name=name,
        this.age=age,
        this.email=email,
        this.phone=phone
 }
  personDetails():string{
      return `hello i am ${this.name}, i am ${this.age} years old,my email is ${this.email} and phonenumber ${this.phone}`
  }

}