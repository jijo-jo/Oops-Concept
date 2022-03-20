class Person{
    stuname:string
    constructor(stuname:string){
        this.stuname=stuname
    }
    eat():void{
        console.log(this.stuname+" eats when hungry.")
    }
}
 
class Student extends Person{
    // variables
    rollnumber:number;
 
    // constructors
    constructor(name1:string,rollnumber:number){
        super(name1)// calling Parent's constructor
        this.rollnumber = rollnumber

    }
 
    // functions
    displayInformation():void{
        console.log("Name : "+this.stuname+", Roll Number : "+this.rollnumber)
    }
 
    // overriding super class method
    eat():void{
        console.log(this.stuname+" eats during break.")
    }
}
 
var student1 = new Student("Rohit",2)
 
student1.displayInformation()
student1.eat()
