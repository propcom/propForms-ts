export default class InvalidValidator
    implements PropFormsValidator<HTMLElement> {
    readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    validate(): boolean {
        return false;
    }

    pass(): HTMLElement {
        return this.element;
    }

    error(): HTMLElement {
        return this.element;
    }
}
