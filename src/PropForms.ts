import PropFormsCore from "./classes/PropFormsCore";
import { PropFormsSettings } from "./types/PropFormsSettings";
import { PropFormsOptions } from "./types/PropFormsOptions";
import PropFormsEvent from "./classes/events/model/PropFormsEvent";
import InvalidEvent from "./classes/events/model/InvalidEvent";
import PropFormsValidator from "./classes/validation/validators/abstract/PropFormsValidator";
import PropFormsPopulate from "./classes/populate/PropFormsPopulate";
import EventsMap from "./classes/events/EventsMap";

export default class PropForms {
    static defaults: PropFormsSettings = {
        errorClass: "propForms-error",
        populate: false,
        fileSize: 20,
        messages: {
            0: "Please enter a value",
            1: "Please enter a valid email address",
            2: "Please check the box to continue",
            3: "Please enter a valid phone number",
            4: "Please choose an option",
            5: "Please select an option",
            6: "Please select a file",
            7: "%s is too large, please choose a smaller file"
        }
    };

    private readonly element?: HTMLFormElement;
    private core?: PropFormsCore;
    private settings: PropFormsSettings;

    constructor(element: HTMLFormElement | string, options?: PropFormsOptions) {
        if (typeof element === "string") {
            this.element = this.findForm(element);
        } else {
            this.element = element;
        }

        this.settings = { ...PropForms.defaults, ...options };

        if (options && options.messages) {
            this.settings.messages = {
                ...PropForms.defaults.messages,
                ...options.messages
            };
        }

        if (typeof this.element === "undefined") {
            console.warn(
                "Initialising PropForms without a form, try to avoid doing this, 95% of the code base has been disabled."
            );
            return;
        }

        this.core = new PropFormsCore(this.element, this.settings);
        this.settings.populate === true && this.populate();
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

    public on<T extends keyof EventsMap>(
        event: T,
        fn: (e: EventsMap[T]) => void
    ) {
        if (typeof this.core !== "undefined") {
            this.core.events.on(event, fn);
        }
    }

    public remove<T extends keyof EventsMap>(
        event: T,
        fn: (e: EventsMap[T]) => void
    ) {
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
export { PropFormsEvent, InvalidEvent, PropFormsValidator, PropFormsOptions };
