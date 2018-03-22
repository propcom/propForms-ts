import PropFormsValidator from "./abstract/PropFormsValidator";

export default class EmailValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): boolean {
        console.log("validate input email element...");
        return this.element.value.length > 0;
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
