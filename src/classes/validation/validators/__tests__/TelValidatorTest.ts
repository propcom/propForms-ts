import TelValidator from "../TelValidator";

let input: HTMLInputElement;
let validator: TelValidator;

beforeEach(() => {
    input = document.createElement("input");
    input.type = "tel";

    validator = new TelValidator(input);
});

it("should fail validation if no value entered", () => {
    expect(validator.validate().isValid).toBe(false);
});

it("should fail validation if letters are entered", () => {
    input.value = "093837xx293";
    expect(validator.validate().isValid).toBe(false);
});

it("should fail validation if the number is less than 6 in length", () => {
    input.value = "12345";
    expect(validator.validate().isValid).toBe(false);
});

it("should fail validation if a word is entered", () => {
    input.value = "hey";
    expect(validator.validate().isValid).toBe(false);
});

it("should pass validation if a valid number is entered", () => {
    input.value = "4213871631";
    expect(validator.validate().isValid).toBe(true);
});
