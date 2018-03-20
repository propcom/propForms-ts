export default class PropForms {
    static version: String = `3.0.0`;

    private element?: HTMLFormElement;
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
}
