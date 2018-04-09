import PropFormsValidator from "./abstract/PropFormsValidator";
import ValidationResult from "./model/ValidationResult";
import Valid from "./model/Valid";

export default class SelectValidator extends PropFormsValidator<HTMLSelectElement> {
    validate(): ValidationResult {
        return new Valid(this.element);
    }
}
