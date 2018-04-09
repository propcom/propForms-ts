import { PropFormsSettings } from "../../../../types/PropFormsSettings";

export default abstract class PropFormsValidator<T extends HTMLElement> {
    readonly element: T;
    protected readonly settings: PropFormsSettings;
    protected errorMessage?: string;

    constructor(element: T, settings: PropFormsSettings) {
        this.element = element;
        this.settings = settings;
    }

    abstract validate(): boolean;

    error(): T {
        this.element.classList.add(this.settings.errorClass);
        return this.element;
    }

    pass(): T {
        this.element.classList.remove(this.settings.errorClass);
        return this.element;
    }
}
