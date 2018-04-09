import PropFormsValidator from "./abstract/PropFormsValidator";
import { queryElements } from "../../utils/utils";
import { PropFormsSettings } from "../../../types/PropFormsSettings";

export default class RadioValidator extends PropFormsValidator<HTMLInputElement> {
    private radios: HTMLInputElement[];

    constructor(element: HTMLInputElement, settings: PropFormsSettings) {
        super(element, settings);
        this.radios = queryElements<HTMLInputElement>(`*[name=${element.name}]`);
    }

    validate(): boolean {
        const rules: boolean[] = this.radios.map(this.checkValue);
        return rules.indexOf(true) >= 0;
    }

    error(): HTMLInputElement {
        this.radios.forEach(e => {
            e.classList.add(this.settings.errorClass);
        });

        return this.element;
    }

    pass(): HTMLInputElement {
        this.radios.forEach(e => {
            e.classList.remove(this.settings.errorClass);
        });

        return this.element;
    }

    checkValue(element: HTMLInputElement): boolean {
        return element.checked;
    }
}
