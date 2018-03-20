import PropFormsValidator from "./abstract/PropFormsValidator";

export default class InvalidValidator extends PropFormsValidator<HTMLElement> {
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
