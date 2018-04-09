import PropFormsValidator from "./abstract/PropFormsValidator";
import ValidationResult from "./model/ValidationResult";
import Invalid from "./model/Invalid";
import Valid from "./model/Valid";

export default class CheckboxValidator extends PropFormsValidator<HTMLInputElement> {
    validate(): ValidationResult {
        return this.element.checked
            ? new Valid(this.element)
            : new Invalid(this.element, 1, "Please check the box to continue");
    }
}
