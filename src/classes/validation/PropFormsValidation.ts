import ValidatorFactory from "./validators/factory/ValidatorFactory";
import PropFormsValidator from "./validators/abstract/PropFormsValidator";

export default class PropFormsValidation {
    private readonly form: HTMLFormElement;
    private readonly fields: HTMLElement[];
    private validators: PropFormsValidator<HTMLElement>[];

    constructor(form: HTMLFormElement, fields: HTMLElement[]) {
        this.form = form;
        this.fields = fields;
        this.validators = this.createValidators();

        // Turn HTML5 Validation off.
        this.form.setAttribute("novalidate", "true");
    }

    public validate(): boolean {
        const results: boolean[] = this.validators.map(v => {
            return v.validate();
        });

        if (results.length === 0) {
            return true;
        }

        return results.reduce((p, c) => {
            return p && c;
        });
    }

    public validateField(id: string): boolean {
        const validators: PropFormsValidator<HTMLElement>[] = this.validators.filter(v => {
            return v.element.id === id;
        });

        const results: boolean[] = validators.map(v => {
            return v.validate();
        });

        if (results.length === 0) {
            console.warn(`There was no validator found for ${id}, auto passing`);
            return true;
        }

        return results.reduce((p, c) => {
            return p && c;
        });
    }

    private createValidators(): PropFormsValidator<HTMLElement>[] {
        return this.fields.map(field => {
            return ValidatorFactory.createValidator(field);
        });
    }
}
