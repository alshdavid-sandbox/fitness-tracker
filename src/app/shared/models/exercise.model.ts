export interface IExercise {
    name: string
    tags: string[]
}

export class Exercise implements IExercise {
    constructor(
        public name: string,
        public tags: string[]
    ) {}
}
