import PropFormsValidator from "../abstract/PropFormsValidator";
import {
    InvalidValidator,
    InputTextValidator,
    TextAreaValidator,
    CheckboxValidator,
    RadioValidator,
    FileValidator,
    SelectValidator,
    EmailValidator
} from "../index";

export default class ValidatorFactory {
    static createValidator(element: HTMLElement): PropFormsValidator<HTMLElement> {
        if (element instanceof HTMLInputElement) {
            switch (element.type) {
                case "text":
                    return new InputTextValidator(element);
                case "email":
                    return new EmailValidator(element);
                case "checkbox":
                    return new CheckboxValidator(element);
                case "radio":
                    return new RadioValidator(element);
                case "file":
                    return new FileValidator(element);
            }
        }

        if (element instanceof HTMLTextAreaElement) {
            return new TextAreaValidator(element);
        }

        if (element instanceof HTMLSelectElement) {
            return new SelectValidator(element);
        }

        // Fall back to the InvalidValidator if the element isn't supported
        return new InvalidValidator(element);
    }
}
