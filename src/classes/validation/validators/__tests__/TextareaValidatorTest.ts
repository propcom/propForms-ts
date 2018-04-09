import TextareaValidator from "../TextAreaValidator";

let textarea: HTMLTextAreaElement;
let validator: TextareaValidator;

beforeEach(() => {
    textarea = document.createElement("textarea");
    validator = new TextareaValidator(textarea);
});

it("should fail validation if the textarea is empty", () => {
    const valid = validator.validate();
    expect(valid).toBe(false);
});

it("should pass validator if the textarea has a value", () => {
    textarea.value = "This is a test";

    const valid = validator.validate();
    expect(valid).toBe(true);
});
