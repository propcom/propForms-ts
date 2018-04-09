import { PropFormsSettings } from "../../../../types/PropFormsSettings";

export default abstract class PropFormsValidator<T extends HTMLElement> {
    readonly element: T;
    protected settings?: PropFormsSettings;
    protected errorMessage?: string;

    constructor(element: T) {
        this.element = element;
    }

    abstract validate(): boolean;

    public setSettings(settings: PropFormsSettings) {
        this.settings = settings;
    }

    public error(): T {
        if (typeof this.settings !== "undefined") {
            this.element.classList.add(this.settings.errorClass);
        }

        return this.element;
    }

    public pass(): T {
        if (typeof this.settings !== "undefined") {
            this.element.classList.remove(this.settings.errorClass);
        }

        return this.element;
    }
}
