import ValidationResult from "./ValidationResult";

export default class Valid implements ValidationResult {
    readonly isValid: boolean = true;
    readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }
}
