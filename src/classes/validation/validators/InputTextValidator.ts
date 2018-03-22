import PropFormsValidator from "./abstract/PropFormsValidator";

export default class InputTextValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): boolean {
        const rules: boolean[] = [this.validateLength()];

        return rules.reduce((p, c) => p && c);
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }

    protected validateLength(): boolean {
        const isValid: boolean = this.element.value.length > 0;

        if (!isValid) {
            this.errorMessage = "Please enter a value";
        }

        return isValid;
    }
}
