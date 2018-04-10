import { PropFormsSettings } from "../../../../types/PropFormsSettings";
import { findParent } from "../../../../utils/utils";
import ValidationResult from "../model/ValidationResult";
import Invalid from "../model/Invalid";

export default abstract class PropFormsValidator<T extends HTMLElement> {
    readonly element: T;

    protected settings?: PropFormsSettings;
    protected parent?: HTMLElement;

    static reduceResults(
        p: ValidationResult,
        c: ValidationResult
    ): ValidationResult {
        if (c instanceof Invalid) {
            return c;
        } else if (p instanceof Invalid) {
            return p;
        } else {
            return c;
        }
    }

    constructor(element: T) {
        this.element = element;
    }

    abstract validate(): ValidationResult;

    public setSettings(settings: PropFormsSettings) {
        this.settings = settings;

        if (typeof settings.parent !== "undefined") {
            this.parent = findParent(settings.parent, this.element);
        }
    }

    public error(): T {
        if (typeof this.settings !== "undefined") {
            this.element.classList.add(this.settings.errorClass);

            if (typeof this.parent !== "undefined") {
                this.parent.classList.add(this.settings.errorClass);
            }
        }

        return this.element;
    }

    public pass(): T {
        if (typeof this.settings !== "undefined") {
            this.element.classList.remove(this.settings.errorClass);

            if (typeof this.parent !== "undefined") {
                this.parent.classList.remove(this.settings.errorClass);
            }
        }

        return this.element;
    }

    protected invalid(code: number, args?: string): Invalid {
        if (typeof this.settings !== "undefined") {
            const message: string =
                typeof args === "undefined"
                    ? this.settings.messages[code]
                    : this.settings.messages[code].replace(/%s/g, args);

            return new Invalid(this.element, code, message);
        }

        return new Invalid(this.element, code, "Please enter a valid value");
    }
}
