import { Formula } from "./formula";
import { SingleOperand } from "./single_operand";

/**
 * Error
 * erf, erff, erfl : erf
 * erfc, erfcf, erfcl : erfc
 */

export enum ErrType {
    erf, erfc
}

export class Err extends SingleOperand {
    accept(visitor: import("../formula_visitor").formula_visitor) {
        throw new Error("Method not implemented.");
    }
    type : ErrType

    constructor(str : string, op : Formula, type : ErrType) {
        super(str, op);
        this.type = type;
    }

}