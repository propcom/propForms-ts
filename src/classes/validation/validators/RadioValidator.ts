import PropFormsValidator from "./abstract/PropFormsValidator";
import { queryElements } from "../../../utils/utils";
import Invalid from "./model/Invalid";
import Valid from "./model/Valid";
import ValidationResult from "./model/ValidationResult";

export default class RadioValidator extends PropFormsValidator<HTMLInputElement> {
    private radios: HTMLInputElement[];

    constructor(element: HTMLInputElement) {
        super(element);
        this.radios = queryElements<HTMLInputElement>(`*[name=${element.name}]`);
    }

    validate(): ValidationResult {
        const rules: boolean[] = this.radios.map(this.checkValue);

        return rules.indexOf(true) >= 0 ? new Valid(this.element) : this.invalid(4);
    }

    error(): HTMLInputElement {
        if (typeof this.settings !== "undefined") {
            this.radios.forEach(e => {
                e.classList.add(this.settings!.errorClass);
            });

            if (typeof this.parent !== "undefined") {
                this.parent.classList.add(this.settings.errorClass);
            }
        }

        return this.element;
    }

    pass(): HTMLInputElement {
        if (typeof this.settings !== "undefined") {
            this.radios.forEach(e => {
                e.classList.remove(this.settings!.errorClass);
            });

            if (typeof this.parent !== "undefined") {
                this.parent.classList.remove(this.settings.errorClass);
            }
        }

        return this.element;
    }

    checkValue(element: HTMLInputElement): boolean {
        return element.checked;
    }
}
