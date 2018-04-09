import RadioValidator from "../RadioValidator";

let radio: HTMLInputElement;
let validator: RadioValidator;

beforeEach(() => {
    document.body.innerHTML = `
        <input id="test" type="radio" name="test" value="1">
        <input type="radio" name="test" value="2">
        <input type="radio" name="test" value="3">
        <input type="radio" name="test" value="4">
    `;

    radio = document.getElementById("test") as HTMLInputElement;
    validator = new RadioValidator(radio);
});

it("should fail validation if no radio button in the group is checked", () => {
    const valid: boolean = validator.validate();
    expect(valid).toBe(false);
});

it("should pass validation if one radio button in the group is checked", () => {
    radio.checked = true;
    const valid: boolean = validator.validate();
    expect(valid).toBe(true);
});
