abstract class Boys{
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
  boysDetails():string{
      return `hello i am ${this.name}, i am ${this.age} years old,my email is ${this.email} and phonenumber ${this.phone}`
  }

}
export default Boys;