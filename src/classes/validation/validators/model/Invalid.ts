import ValidationResult from "./ValidationResult";

export default class Invalid implements ValidationResult {
    readonly isValid: boolean = false;
    readonly element: HTMLElement;
    readonly code: number;
    readonly message: string;

    constructor(element: HTMLElement, code: number, message: string) {
        this.element = element;
        this.code = code;
        this.message = message;
    }
}
