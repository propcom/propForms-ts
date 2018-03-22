import PropFormsValidator from "./abstract/PropFormsValidator";

export default class InputTextValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): boolean {
        console.log("validate input text element...");
        return this.element.value.length > 0;
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
