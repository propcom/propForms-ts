import PropFormsValidator from "./abstract/PropFormsValidator";

export default class TextAreaValidator extends PropFormsValidator<HTMLTextAreaElement> {
    validate(): boolean {
        console.log("validating a textarea");
        return true;
    }

    error(): HTMLTextAreaElement {
        return this.element;
    }

    pass(): HTMLTextAreaElement {
        return this.element;
    }
}
