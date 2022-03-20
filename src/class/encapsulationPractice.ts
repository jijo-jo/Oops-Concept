class Bankacount{

    public readonly minimumbalance:number;
    private accounbalance:number;
    protected accountNumber:number;

    constructor(minimumbalance:number,accounbalance:number,accountNumber:number)
    {
        this.minimumbalance=minimumbalance,
        this.accounbalance=accounbalance,
        this.accountNumber=accountNumber
    }

    printAccountDetails():string{
        return `minimumbalance = ${this.minimumbalance}, 
                accounbalance = ${this.accounbalance},
                accountNumber = ${this.accountNumber}`
    }

}

class BankManager extends Bankacount{

    constructor(minimumbalance:number,accounbalance:number,accountNumber:number){
        super(minimumbalance,accounbalance,accountNumber);
    }
    printBankView():string{
        return `minimumbalance = ${this.minimumbalance},
        accountNumber = ${this.accountNumber}`
        //accounbalance = ${this.accounbalance}//private only see in that particular class
    }
}

export {Bankacount,BankManager};