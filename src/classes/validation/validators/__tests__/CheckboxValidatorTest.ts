import CheckboxValidator from "../CheckboxValidator";

let input: HTMLInputElement;
let validator: CheckboxValidator;

beforeEach(() => {
    input = document.createElement("input");
    input.type = "checkbox";

    validator = new CheckboxValidator(input);
});

it("should fail validator if it is not checked", () => {
    const valid = validator.validate();
    expect(valid.isValid).toBe(false);
});

it("should pass validator if the checkbox is checked", () => {
    input.checked = true;
    const valid = validator.validate();
    expect(valid.isValid).toBe(true);
});
