import PropFormsValidator from "./abstract/PropFormsValidator";
import Invalid from "./model/Invalid";
import Valid from "./model/Valid";
import ValidationResult from "./model/ValidationResult";

export default class FileValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): ValidationResult {
        return this.element.checked ? new Valid(this.element) : this.invalid(6);
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
