import PropFormsValidator from "./abstract/PropFormsValidator";

export default class SelectValidator extends PropFormsValidator<HTMLSelectElement> {
    validate(): boolean {
        console.log("validate select element...");
        return true;
    }
}
