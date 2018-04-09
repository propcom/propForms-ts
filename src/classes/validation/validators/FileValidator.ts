import PropFormsValidator from "./abstract/PropFormsValidator";
import Invalid from "./model/Invalid";
import Valid from "./model/Valid";
import ValidationResult from "./model/ValidationResult";

export default class FileValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): ValidationResult {
        return this.element.checked
            ? new Valid(this.element)
            : new Invalid(this.element, 1, "Invalid File");
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }
}
