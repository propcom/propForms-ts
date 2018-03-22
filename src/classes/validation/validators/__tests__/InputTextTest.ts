import InputTextValidator from "../InputTextValidator";

let input: HTMLInputElement;
let validator: InputTextValidator;

beforeEach(() => {
    input = document.createElement("input");
    input.type = "text";

    validator = new InputTextValidator(input);
});

it("should fail validation if no value entered", () => {
    expect(validator.validate()).toBe(false);
});

it("should pass validation if a value is entered", () => {
    input.value = "Hey";
    expect(validator.validate()).toBe(true);
});
