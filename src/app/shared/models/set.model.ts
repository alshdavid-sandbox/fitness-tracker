export interface ISet {
    reps?: number,
    weight?: number
}


export class Set implements ISet {
    constructor(
        public reps?: number,
        public weight?: number
    ) {}
}
