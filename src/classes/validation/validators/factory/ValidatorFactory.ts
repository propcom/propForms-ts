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
import { PropFormsSettings } from "../../../../types/PropFormsSettings";

export default class ValidatorFactory {
    static createValidator(
        element: HTMLElement,
        settings: PropFormsSettings
    ): PropFormsValidator<HTMLElement> {
        if (element instanceof HTMLInputElement) {
            switch (element.type) {
                case "text":
                    return new InputTextValidator(element, settings);
                case "email":
                    return new EmailValidator(element, settings);
                case "checkbox":
                    return new CheckboxValidator(element, settings);
                case "radio":
                    return new RadioValidator(element, settings);
                case "file":
                    return new FileValidator(element, settings);
            }
        }

        if (element instanceof HTMLTextAreaElement) {
            return new TextAreaValidator(element, settings);
        }

        if (element instanceof HTMLSelectElement) {
            return new SelectValidator(element, settings);
        }

        // Fall back to the InvalidValidator if the element isn't supported
        return new InvalidValidator(element, settings);
    }
}
