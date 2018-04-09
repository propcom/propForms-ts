import PropFormsValidator from "./abstract/PropFormsValidator";
import ValidationResult from "./model/ValidationResult";
import Valid from "./model/Valid";
import Invalid from "./model/Invalid";

export default class SelectValidator extends PropFormsValidator<HTMLSelectElement> {
    validate(): ValidationResult {
        const index: number = this.element.selectedIndex;
        const option: HTMLOptionElement = this.element.options.item(index);

        return !option.hasAttribute("data-invalid")
            ? new Valid(this.element)
            : new Invalid(this.element, 1, "Please select a valid option");
    }
}
