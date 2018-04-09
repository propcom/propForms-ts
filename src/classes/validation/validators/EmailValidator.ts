import InputTextValidator from "./InputTextValidator";

export default class EmailValidator extends InputTextValidator {
    validate(): boolean {
        const rules: boolean[] = [super.validate(), this.validateEmail()];

        return rules.reduce((p, c) => p && c);
    }

    validateEmail(): boolean {
        const regEx = /^([^.][^\s\\@]+[^.])@(([0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,}|[0-9]{1,3})$/;
        const result = regEx.test(this.element.value);

        if (!result) {
            this.errorMessage = "Please enter a valid email address";
        }

        return result;
    }
}
