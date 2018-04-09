import InputTextValidator from "./InputTextValidator";
import ValidationResult from "./model/ValidationResult";
import Valid from "./model/Valid";
import Invalid from "./model/Invalid";
import PropFormsValidator from "./abstract/PropFormsValidator";

export default class TelValidator extends InputTextValidator {
    validate() {
        const rules: ValidationResult[] = [super.validate(), this.checkTel()];
        return rules.reduce(PropFormsValidator.reduceResults);
    }

    private checkTel(): ValidationResult {
        const value: number = parseInt(this.element.value);
        return !isNaN(value)
            ? new Valid(this.element)
            : new Invalid(this.element, 1, "Please enter a valid phone number");
    }
}
