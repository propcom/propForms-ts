import ValidatorFactory from "./validators/factory/ValidatorFactory";
import PropFormsValidator from "./validators/abstract/PropFormsValidator";
import { PropFormsSettings } from "../../types/PropFormsSettings";
import ValidationResult from "./validators/model/ValidationResult";
import { findElements } from "../../utils/utils";
import PropFormsEvents from "../events/PropFormsEvents";
import Invalid from "./validators/model/Invalid";
import Valid from "./validators/model/Valid";

export default class PropFormsValidation {
    private readonly form: HTMLFormElement;
    private readonly events: PropFormsEvents;
    private settings: PropFormsSettings;
    private validators: PropFormsValidator<HTMLElement>[];

    public readonly requiredFields: HTMLElement[];

    constructor(form: HTMLFormElement, settings: PropFormsSettings, events: PropFormsEvents) {
        this.settings = settings;
        this.form = form;
        this.events = events;
        this.requiredFields = findElements<HTMLElement>(this.form, "*[required]");
        this.validators = this.createValidators();

        // Done like this so the user doesn't have to pass settings through to their validator, we handle it for them.
        this.validators.forEach(v => {
            v.setSettings(this.settings);
        });

        // Turn HTML5 Validation off.
        this.form.setAttribute("novalidate", "true");
    }

    public validate(): boolean {
        const results: boolean[] = this.validators.map(v => this.process(v));

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

        const results: boolean[] = validators.map(v => this.process(v));

        if (results.length === 0) {
            console.warn(`There was no validator found for ${id}, auto passing`);
            return true;
        }

        return results.reduce((p, c) => {
            return p && c;
        });
    }

    private createValidators(): PropFormsValidator<HTMLElement>[] {
        const requiredValidators = this.requiredFields.map(field => {
            return ValidatorFactory.createValidator(field);
        });

        if (typeof this.settings.validators !== "undefined") {
            return [...this.settings.validators, ...requiredValidators];
        }

        return requiredValidators;
    }

    private process(validator: PropFormsValidator<HTMLElement>): boolean {
        const result: ValidationResult = validator.validate();

        if (result.isValid) {
            validator.pass();
            this.dispatchValidEvent(result as Valid);
        } else {
            validator.error();
            this.dispatchInvalidEvent(result as Invalid);
        }

        return result.isValid;
    }

    private dispatchInvalidEvent(result: Invalid) {
        console.log(result);
    }

    private dispatchValidEvent(result: Valid) {
        console.log(result);
    }
}
