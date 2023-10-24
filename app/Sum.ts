import { Expression } from "./Expression";
import { Money } from "./money";

export class Sum implements Expression{
    augend: Money
    addend: Money

    constructor(augend: Money, addend: Money) {
        this.augend = augend
        this.addend = addend
    }

    public reduce(to: string): Money {
        const amount: number = this.augend.amount + this.addend.amount
        return new Money(amount, to)
    }
}