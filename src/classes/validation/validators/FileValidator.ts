import PropFormsValidator from "./abstract/PropFormsValidator";

export default class FileValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): boolean {
        console.log("validate input file element...");
        return this.element.checked;
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
