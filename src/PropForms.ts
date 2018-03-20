import PropFormsCore from "./classes/PropFormsCore";

export default class PropForms {
    private readonly element?: HTMLFormElement;
    private core?: PropFormsCore;
    private options: PropFormsOptions = {
        errorClass: "propForms-error"
    };

    constructor(element: HTMLFormElement | string, options?: PropFormsOptions) {
        if (typeof element === "string") {
            this.element = this.findForm(element);
        } else {
            this.element = element;
        }

        this.options = { ...this.options, ...options };

        if (typeof this.element === "undefined") {
            return;
        }

        this.core = new PropFormsCore(this.element, this.options);
    }

    private findForm(identifier: string): HTMLFormElement | undefined {
        const element = document.querySelector(identifier);

        if (element instanceof HTMLFormElement) {
            return element;
        }

        return undefined;
    }

    public getForm(): HTMLFormElement | undefined {
        return this.element;
    }

    public isDisabled(): boolean {
        if (typeof this.core !== "undefined") {
            return this.core.isDisabled;
        }

        return false;
    }

    public disable() {
        if (typeof this.core !== "undefined") {
            this.core.disable();
        }
    }

    public enable() {
        if (typeof this.core !== "undefined") {
            this.core.disable(false);
        }
    }
}
