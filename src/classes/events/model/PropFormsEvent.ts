export default class PropFormsEvent {
    readonly name: string;
    readonly element: HTMLElement;

    constructor(name: string, element: HTMLElement) {
        this.name = name;
        this.element = element;
    }
}
