export interface IToolbarItem {
    text: string,
    link: string[]
}

export class ToolbarItem implements IToolbarItem {
    constructor(
        public text: string,
        public link: string[]
    ) {}
}
