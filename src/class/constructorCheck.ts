class Animal{
    name:string;
    legs:number;

    constructor(name:string,legs:number){
        this.name=name,
        this.legs=legs
    }

    printDetail(colorcode:string):void{
        console.log( `${colorcode} Animal: this is a ${this.name} an I have ${this.legs}`);
    }
}

class Birds extends Animal{

    printDetails(color:number):void{
        console.log( `${color} this is a ${this.name} an I have ${this.legs}`);
    }
} 

const bird=new Birds("peacock",2);
bird.printDetail("Blue");

