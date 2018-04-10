import PropFormsValidator from "./abstract/PropFormsValidator";
import Invalid from "./model/Invalid";
import Valid from "./model/Valid";
import ValidationResult from "./model/ValidationResult";

export default class FileValidator extends PropFormsValidator<
    HTMLInputElement
> {
    validate(): ValidationResult {
        const rules: ValidationResult[] = [
            this.validateExists(),
            this.validateFileSize()
        ];

        return rules.reduce(PropFormsValidator.reduceResults);
    }

    private validateExists(): ValidationResult {
        if (!this.element.files) {
            return this.invalid(6);
        }

        if (this.element.files && this.element.files.length === 0) {
            return this.invalid(6);
        }

        return new Valid(this.element);
    }

    private validateFileSize(): ValidationResult {
        const files = this.element.files;
        const limit =
            Math.pow(1024, 2) * (this.settings ? this.settings.fileSize : 20);

        if (files) {
            for (let i = 0; i < files.length; i++) {
                const file = files.item(i);

                if (file.size > limit) {
                    return this.invalid(7, file.name);
                }
            }
        }

        return new Valid(this.element);
    }
}
