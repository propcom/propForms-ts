import PropFormsValidator from "./abstract/PropFormsValidator";

export default class TextAreaValidator extends PropFormsValidator<HTMLTextAreaElement> {
    validate(): boolean {
        return this.element.value.length > 0;
    }

    error(): HTMLTextAreaElement {
        return this.element;
    }

    pass(): HTMLTextAreaElement {
        return this.element;
    }
}
