import PropFormsValidator from "./abstract/PropFormsValidator";

export default class InvalidValidator extends PropFormsValidator<HTMLElement> {
    validate(): boolean {
        console.warn(
            `We found no validator for ${
                this.element.className
            } this element will always pass validation`
        );
        return true;
    }
}
