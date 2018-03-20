import { findElements, dispatchEvent } from "./utils/utils";
import PropFormsValidation from "./validation/PropFormsValidation";
import PropFormsEvent from "./model/events/PropFormsEvent";

export default class PropFormsCore {
    private readonly form: HTMLFormElement;
    private options: PropFormsOptions;
    private requiredFields: HTMLElement[];
    private validator: PropFormsValidation;
    public isDisabled: boolean = false;

    private submitEvent = (e: Event) => {
        e.preventDefault();
        this.submit();
    };

    constructor(form: HTMLFormElement, options: PropFormsOptions) {
        this.options = options;
        this.form = form;
        this.requiredFields = this.findRequiredFields();
        this.validator = new PropFormsValidation(
            this.form,
            this.requiredFields
        );

        this.bindSubmit();
    }

    public validate(): boolean {
        return this.validator.validate();
    }

    public validateField(id: string): boolean {
        return this.validator.validateField(id);
    }

    public getRequiredFields(): HTMLElement[] {
        return this.requiredFields;
    }

    public submit(): void {
        console.log("submitting...!");
    }

    public bindSubmit(): void {
        this.form.addEventListener("submit", this.submitEvent);
    }

    public unbindSubmit(): void {
        this.form.removeEventListener("submit", this.submitEvent);
    }

    private findRequiredFields(): HTMLElement[] {
        return findElements<HTMLElement>(this.form, "*[required]");
    }

    public disable() {
        const event: PropFormsEvent = new PropFormsEvent("disable", this.form);

        for (let i = 0; i < this.form.elements.length; i++) {
            const element: HTMLElement = this.form.elements.item(
                i
            ) as HTMLElement;

            element.setAttribute("disabled", "true");
            element.style.opacity = "0.3";
        }

        this.isDisabled = true;
        dispatchEvent(event);
    }

    public enable() {
        const event: PropFormsEvent = new PropFormsEvent("enable", this.form);

        for (let i = 0; i < this.form.elements.length; i++) {
            const element: HTMLElement = this.form.elements.item(
                i
            ) as HTMLElement;

            element.removeAttribute("disabled");
            element.style.removeProperty("opacity");
        }

        this.isDisabled = false;
        dispatchEvent(event);
    }
}
