import { Expression } from "./Expression";
import { Sum } from "./Sum";
import { Money } from "./money";

export class Bank {
    public reduce(source: Expression, to: string): Money  {
        return source.reduce(to)
    }
}