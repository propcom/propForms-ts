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
    }

    public validate(): boolean {
        const results: boolean[] = this.validators.map(v => {
            return v.validate();
        });

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
