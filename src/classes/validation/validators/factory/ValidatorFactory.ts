import InputValidator from "../InputValidator";
import InvalidValidator from "../InvalidValidator";
import PropFormsValidator from "../abstract/PropFormsValidator";
import TextAreaValidator from "../TextAreaValidator";

export default class ValidatorFactory {
    static createValidator(
        element: HTMLElement
    ): PropFormsValidator<HTMLElement> {
        if (element instanceof HTMLInputElement) {
            return new InputValidator(element);
        }

        if (element instanceof HTMLTextAreaElement) {
            return new TextAreaValidator(element);
        }

        // Fall back to the InvalidValidator if the element isn't supported
        return new InvalidValidator(element);
    }
}