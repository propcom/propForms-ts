import PropFormsValidator from "./abstract/PropFormsValidator";

export default class CheckboxValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): boolean {
        return this.element.checked;
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
