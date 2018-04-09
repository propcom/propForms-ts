import PropFormsCore from "./classes/PropFormsCore";
import { PropFormsSettings } from "./types/PropFormsSettings";
import { PropFormsOptions } from "./types/PropFormsOptions";
import PropFormsEvent from "./classes/events/model/PropFormsEvent";
import PropFormsValidator from "./classes/validation/validators/abstract/PropFormsValidator";
import PropFormsPopulate from "./classes/populate/PropFormsPopulate";

export default class PropForms {
    private readonly element?: HTMLFormElement;
    private core?: PropFormsCore;
    private settings: PropFormsSettings = {
        errorClass: "propForms-error"
    };

    constructor(element: HTMLFormElement | string, options?: PropFormsOptions) {
        if (typeof element === "string") {
            this.element = this.findForm(element);
        } else {
            this.element = element;
        }

        this.settings = { ...this.settings, ...options };

        if (typeof this.element === "undefined") {
            console.warn(
                "Initialising PropForms without a form, try to avoid doing this, 95% of the code base has been disabled."
            );
            return;
        }

        this.core = new PropFormsCore(this.element, this.settings);
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
            this.core.enable();
        }
    }

    public submit() {
        if (typeof this.core !== "undefined") {
            this.core.submit();
        }
    }

    public unbindSubmit() {
        if (typeof this.core !== "undefined") {
            this.core.unbindSubmit();
        }
    }

    public bindSubmit() {
        if (typeof this.core !== "undefined") {
            this.core.bindSubmit();
        }
    }

    public getRequiredFields(): HTMLElement[] {
        if (typeof this.core !== "undefined") {
            return this.core.getRequiredFields();
        }

        return [];
    }

    public validate(): boolean {
        if (typeof this.core !== "undefined") {
            return this.core.validator.validate();
        }

        return false;
    }

    public validateField(id: string): boolean {
        if (typeof this.core !== "undefined") {
            return this.core.validator.validateField(id);
        }

        return false;
    }

    public on(event: string, fn: (e: PropFormsEvent) => void) {
        if (typeof this.core !== "undefined") {
            this.core.events.on(event, fn);
        }
    }

    public remove(event: string, fn: (e: PropFormsEvent) => void) {
        if (typeof this.core !== "undefined") {
            this.core.events.remove(event, fn);
        }
    }

    public populate() {
        const form = this.getForm();

        if (typeof form !== "undefined") {
            const populate = new PropFormsPopulate(form);
            populate.populate();
        }
    }

    public clear() {
        const form = this.getForm();

        if (typeof form !== "undefined") {
            const populate = new PropFormsPopulate(form);
            populate.clear();
        }
    }
}

// Exports for publicly available types
export { PropFormsEvent, PropFormsValidator, PropFormsOptions };
