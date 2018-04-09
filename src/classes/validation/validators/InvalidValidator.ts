import PropFormsValidator from "./abstract/PropFormsValidator";
import ValidationResult from "./model/ValidationResult";
import Valid from "./model/Valid";

export default class InvalidValidator extends PropFormsValidator<HTMLElement> {
    validate(): ValidationResult {
        console.warn(
            `We could not find a validator for ${this.element.className ||
                "[no class defined]"} this element will always pass validation`,
            this.element
        );
        return new Valid(this.element);
    }
}
