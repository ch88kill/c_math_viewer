import { Pattern } from "./pattern";
import { Formula } from "./formula";

/**
 * pow, powf, powl
 */

export class Pow extends Pattern {

    constructor(str: string, first: Formula, second: Formula) {
        super(str, first, second);
    }
}