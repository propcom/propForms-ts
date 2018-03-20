import InputValidator from "../InputValidator";
import InvalidValidator from "../InvalidValidator";

export default class ValidatorFactory {
    static createValidator(
        element: HTMLElement
    ): PropFormsValidator<HTMLElement> {
        if (element instanceof HTMLInputElement) {
            return new InputValidator(element);
        }

        // Fall back to the InvalidValidator if the element isn't supported
        return new InvalidValidator(element);
    }
}
