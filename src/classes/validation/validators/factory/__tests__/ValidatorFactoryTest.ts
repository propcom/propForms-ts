import ValidatorFactory from "../ValidatorFactory";
import InputTextValidator from "../../InputTextValidator";
import EmailValidator from "../../EmailValidator";
import CheckboxValidator from "../../CheckboxValidator";
import RadioValidator from "../../RadioValidator";
import FileValidator from "../../FileValidator";
import SelectValidator from "../../SelectValidator";
import TextAreaValidator from "../../TextAreaValidator";

it("Creates an InputTextValidator if the element is input[type=text]", () => {
    const element: HTMLInputElement = document.createElement("input");
    element.type = "text";

    const validator = ValidatorFactory.createValidator(element);

    expect(validator instanceof InputTextValidator).toBe(true);
});

it("Creates an EmailValidator if the element is input[type=email]", () => {
    const element: HTMLInputElement = document.createElement("input");
    element.type = "email";

    const validator = ValidatorFactory.createValidator(element);

    expect(validator instanceof EmailValidator).toBe(true);
});

it("Creates an CheckboxValidator if the element is input[type=checkbox]", () => {
    const element: HTMLInputElement = document.createElement("input");
    element.type = "checkbox";

    const validator = ValidatorFactory.createValidator(element);

    expect(validator instanceof CheckboxValidator).toBe(true);
});

it("Creates an RadioValidator if the element is input[type=radio]", () => {
    const element: HTMLInputElement = document.createElement("input");
    element.type = "radio";

    const validator = ValidatorFactory.createValidator(element);

    expect(validator instanceof RadioValidator).toBe(true);
});

it("Creates an FileValidator if the element is input[type=file]", () => {
    const element: HTMLInputElement = document.createElement("input");
    element.type = "file";

    const validator = ValidatorFactory.createValidator(element);

    expect(validator instanceof FileValidator).toBe(true);
});

it("Creates an SelectValidator if the element is a select", () => {
    const element: HTMLSelectElement = document.createElement("select");
    const validator = ValidatorFactory.createValidator(element);

    expect(validator instanceof SelectValidator).toBe(true);
});

it("Creates an TextAreaValidator if the element is a textarea", () => {
    const element: HTMLTextAreaElement = document.createElement("textarea");
    const validator = ValidatorFactory.createValidator(element);

    expect(validator instanceof TextAreaValidator).toBe(true);
});
