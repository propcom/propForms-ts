import TestUtils from "../../TestUtils";
import PropForms from "../PropForms";

beforeEach(TestUtils.setUp);

it("correctly initialises with an element selector", () => {
    const form = document.getElementById("form");

    if (form instanceof HTMLFormElement) {
        const instance: PropForms = new PropForms(form);
        expect(instance.getForm()).toBe(form);
    } else {
        fail(
            "Element not found in index.html, unable to conduct test properly."
        );
    }
});

it("correctly initialises with a correct string selector", () => {
    const instance: PropForms = new PropForms("#form");
    expect(instance.getForm()).toBeDefined();
});

it("correctly returns early and warns if the element is not found", () => {
    const spy = spyOn(console, "warn");
    const instance: PropForms = new PropForms("#nothing");

    expect(instance.getForm()).not.toBeDefined();
    expect(spy).toHaveBeenCalledWith(
        "Initialising PropForms without a form, try to avoid doing this, 95% of the code base has been disabled."
    );
});
