export default class PortDetails{
   public port : number;

   constructor(port:number){
       this.port = port;
   }

   portview():string{
       return `The server is running on port ${this.port}`
       
   }

}
