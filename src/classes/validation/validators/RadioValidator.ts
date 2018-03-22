import PropFormsValidator from "./abstract/PropFormsValidator";

export default class RadioValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): boolean {
        console.log("validate input radio element...");
        return this.element.checked;
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
