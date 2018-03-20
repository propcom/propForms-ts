export default class InputValidator
    implements PropFormsValidator<HTMLInputElement> {
    readonly element: HTMLInputElement;

    constructor(element: HTMLInputElement) {
        this.element = element;
    }

    validate(): boolean {
        console.log("validate input element...");
        return this.element.value.length > 0;
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
