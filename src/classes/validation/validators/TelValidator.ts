import InputTextValidator from "./InputTextValidator";
import ValidationResult from "./model/ValidationResult";
import Valid from "./model/Valid";
import Invalid from "./model/Invalid";
import PropFormsValidator from "./abstract/PropFormsValidator";

export default class TelValidator extends InputTextValidator {
    validate() {
        const rules: ValidationResult[] = [
            super.validate(),
            this.validateLen(),
            this.checkTel()
        ];
        return rules.reduce(PropFormsValidator.reduceResults);
    }

    private validateLen() {
        return this.element.value.length > 5
            ? new Valid(this.element)
            : this.invalid(3);
    }

    private checkTel(): ValidationResult {
        const value: number = parseInt(this.element.value);
        const test = this.element.value.match(/([a-zA-Z]+)/);

        return !isNaN(value) && !test
            ? new Valid(this.element)
            : this.invalid(3);
    }
}
