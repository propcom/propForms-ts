import InputTextValidator from "./InputTextValidator";

export default class TelValidator extends InputTextValidator {
    validate() {
        const rules: boolean[] = [super.validate(), this.checkTel()];
        return rules.reduce((c, p) => c && p);
    }

    private checkTel() {
        const value: number = parseInt(this.element.value);
        return !isNaN(value);
    }
}
