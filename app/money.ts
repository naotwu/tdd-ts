export abstract class Money {

    public amount:number

    constructor(amount: number) {
        this.amount = amount
    }

    abstract times(multiplier: number):Money

    public equals(object: Money):boolean {
        const money:Money = object
        return this.amount === money.amount && this.constructor.name === object.constructor.name 
    }

    static dollar(amount: number):Money {
        return new Dollar(amount)
    }
    
    static franc(amount: number):Money {
        return new Franc(amount)
    }
}

export class Dollar extends Money{

    constructor(amount: number) {
        super(amount)
    }

    public times(multiplier: number):Money {
        return new Dollar(this.amount * multiplier)
    }
}

export class Franc extends Money{

    constructor(amount: number) {
        super(amount)
    }

    public times(multiplier: number):Money {
        return new Franc(this.amount * multiplier)
    }
}