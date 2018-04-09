import PropFormsValidator from "./abstract/PropFormsValidator";
import { queryElements } from "../../utils/utils";

export default class RadioValidator extends PropFormsValidator<HTMLInputElement> {
    private radios: HTMLInputElement[];

    constructor(element: HTMLInputElement) {
        super(element);
        this.radios = queryElements<HTMLInputElement>(`*[name=${element.name}]`);
    }

    validate(): boolean {
        const rules: boolean[] = this.radios.map(this.checkValue);
        return rules.indexOf(true) >= 0;
    }

    error(): HTMLInputElement {
        return this.element;
    }

    pass(): HTMLInputElement {
        return this.element;
    }

    checkValue(element: HTMLInputElement): boolean {
        return element.checked;
    }
}
