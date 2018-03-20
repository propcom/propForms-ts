export default class InputValidator extends PropFormsValidator<
    HTMLInputElement
> {
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
