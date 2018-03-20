import { findElements } from "./utils/utils";
import PropFormsValidation from "./validation/PropFormsValidation";

export default class PropFormsCore {
    private readonly form: HTMLFormElement;
    private options: PropFormsOptions;
    private requiredFields: HTMLElement[];
    private validator: PropFormsValidation;

    public isDisabled: boolean = false;

    constructor(form: HTMLFormElement, options: PropFormsOptions) {
        this.options = options;
        this.form = form;
        this.requiredFields = this.findRequiredFields();
        this.validator = new PropFormsValidation(
            this.form,
            this.requiredFields
        );
    }

    public validate(): boolean {
        return this.validator.validate();
    }

    public getRequiredFields(): HTMLElement[] {
        return this.requiredFields;
    }

    private findRequiredFields(): HTMLElement[] {
        return findElements<HTMLElement>(this.form, "*[required]");
    }

    public disable(disable: boolean = true) {
        for (let i = 0; i < this.form.elements.length; i++) {
            const element: HTMLElement = this.form.elements.item(
                i
            ) as HTMLElement;

            if (disable) {
                element.setAttribute("disabled", "true");
                element.style.opacity = "0.3";
            } else {
                element.removeAttribute("disabled");
                element.style.removeProperty("opacity");
            }
        }

        this.isDisabled = disable;
    }
}
