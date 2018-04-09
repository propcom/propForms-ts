import InputTextValidator from "./InputTextValidator";
import Valid from "./model/Valid";
import Invalid from "./model/Invalid";
import ValidationResult from "./model/ValidationResult";
import PropFormsValidator from "./abstract/PropFormsValidator";

export default class EmailValidator extends InputTextValidator {
    validate(): ValidationResult {
        const rules: ValidationResult[] = [super.validate(), this.validateEmail()];
        return rules.reduce(PropFormsValidator.reduceResults);
    }

    validateEmail(): ValidationResult {
        const regEx = /^([^.][^\s\\@]+[^.])@(([0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,}|[0-9]{1,3})$/;
        return regEx.test(this.element.value)
            ? new Valid(this.element)
            : new Invalid(this.element, 1, "Please enter a valid email address");
    }
}
