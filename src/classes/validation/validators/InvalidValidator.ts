import PropFormsValidator from "./abstract/PropFormsValidator";

export default class InvalidValidator extends PropFormsValidator<HTMLElement> {
    validate(): boolean {
        console.warn(
            `We could not find a validator for ${this.element.className ||
                "[no class defined]"} this element will always pass validation`,
            this.element
        );
        return true;
    }
}
