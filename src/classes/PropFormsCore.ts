import PropFormsValidation from "./validation/PropFormsValidation";
import PropFormsEvents from "./events/PropFormsEvents";
import PropFormsEvent from "./events/model/PropFormsEvent";
import { PropFormsSettings } from "../types/PropFormsSettings";

export default class PropFormsCore {
    private readonly form: HTMLFormElement;
    private settings: PropFormsSettings;

    public validator: PropFormsValidation;
    public events: PropFormsEvents = new PropFormsEvents();
    public isDisabled: boolean = false;

    private submitEvent = (e: Event) => {
        e.preventDefault();
        this.submit();
    };

    constructor(form: HTMLFormElement, settings: PropFormsSettings) {
        this.settings = settings;
        this.form = form;
        this.validator = new PropFormsValidation(this.form, this.settings, this.events);

        this.bindSubmit();
    }

    public getRequiredFields(): HTMLElement[] {
        return this.validator.requiredFields;
    }

    public submit(): void {
        if (this.validator.validate() == true) {
            console.log("Success!");
        }
    }

    public bindSubmit(): void {
        this.form.addEventListener("submit", this.submitEvent);
    }

    public unbindSubmit(): void {
        this.form.removeEventListener("submit", this.submitEvent);
    }

    public disable() {
        const event: PropFormsEvent = new PropFormsEvent("disable", this.form);

        for (let i = 0; i < this.form.elements.length; i++) {
            const element: HTMLElement = this.form.elements.item(i) as HTMLElement;

            element.setAttribute("disabled", "true");
            element.style.opacity = "0.3";
        }

        this.isDisabled = true;
        this.events.dispatch(event);
    }

    public enable() {
        const event: PropFormsEvent = new PropFormsEvent("enable", this.form);

        for (let i = 0; i < this.form.elements.length; i++) {
            const element: HTMLElement = this.form.elements.item(i) as HTMLElement;

            element.removeAttribute("disabled");
            element.style.removeProperty("opacity");
        }

        this.isDisabled = false;
        this.events.dispatch(event);
    }
}
