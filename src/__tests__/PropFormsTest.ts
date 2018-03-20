import TestUtils from "../../TestUtils";
import PropForms from "../PropForms";

beforeEach(TestUtils.setUp);

it("correctly initialises with an element selector", () => {
    const form = document.getElementById("form");

    if (form instanceof HTMLFormElement) {
        const instance: PropForms = new PropForms(form);
        expect(instance.getForm()).toBe(form);
    }
});

it("correctly initialises with a string selector", () => {
    const form = document.getElementById("form");
    const instance: PropForms = new PropForms("#form");

    expect(instance.getForm()).toBe(form as HTMLFormElement);
});

it("correctly returns early if the element is not found", () => {
    const instance: PropForms = new PropForms("#nothing");
    expect(instance.getForm()).not.toBeDefined();
});
