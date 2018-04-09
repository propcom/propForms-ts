import PropFormsValidator from "./abstract/PropFormsValidator";
import ValidationResult from "./model/ValidationResult";
import Invalid from "./model/Invalid";
import Valid from "./model/Valid";

export default class InputTextValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): ValidationResult {
        return this.validateLength();
    }

    protected validateLength(): ValidationResult {
        return this.element.value.length > 0
            ? new Valid(this.element)
            : new Invalid(this.element, 1, "Please enter a value");
    }
}
