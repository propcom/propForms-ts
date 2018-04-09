import PropFormsValidator from "./abstract/PropFormsValidator";
import Invalid from "./model/Invalid";
import Valid from "./model/Valid";
import ValidationResult from "./model/ValidationResult";

export default class TextAreaValidator extends PropFormsValidator<HTMLTextAreaElement> {
    validate(): ValidationResult {
        return this.element.value.trim().length > 0
            ? new Valid(this.element)
            : new Invalid(this.element, 1, "Please enter a valid value");
    }
}
