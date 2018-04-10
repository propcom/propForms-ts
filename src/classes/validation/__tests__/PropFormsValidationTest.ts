import PropFormsValidation from "../PropFormsValidation";
import PropFormsEvents from "../../events/PropFormsEvents";
import PropForms from "../../../PropForms";

let form: HTMLFormElement;
let validation: PropFormsValidation;
const events: PropFormsEvents = new PropFormsEvents();

beforeEach(() => {
    document.body.innerHTML = `<form id="form">
            <input type="text" id="text" required>
            <input type="email" id="email" required>
        </form>`;

    form = document.getElementById("form") as HTMLFormElement;
    validation = new PropFormsValidation(form, PropForms.defaults, events);
});

it("should not pass validation", () => {
    const result = validation.validate();
    expect(result).toBe(false);
});

it("should pass validation", () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const text = document.getElementById("text") as HTMLInputElement;

    email.value = "test@test.com";
    text.value = "hello";

    const result = validation.validate();

    expect(result).toBe(true);
});

it("should create a validator for each required field", () => {
    expect(validation.requiredFields.length).toBe(2);
});

it("should dispatch an event for each required field", () => {
    const spy = spyOn(events, "dispatch");
    validation.validate();
    expect(spy).toHaveBeenCalledTimes(2);
});

it("should only validate the one field", () => {
    const result = validation.validateField("email");
    expect(result).toBe(false);
});

it("should only validate the one field", () => {
    const spy = spyOn(validation, "process");
    validation.validateField("email");
    expect(spy).toHaveBeenCalledTimes(1);
});
