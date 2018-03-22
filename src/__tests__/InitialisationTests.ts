import TestUtils from "../../TestUtils";
import PropForms from "../PropForms";
import { JSDOM } from "jsdom";

let form: HTMLFormElement;

beforeEach((done: DoneFn) => {
    TestUtils.setUp().then((dom: JSDOM) => {
        document.body.innerHTML = dom.serialize();
        const element = document.getElementById("form");

        if (element && element instanceof HTMLFormElement) {
            form = element;
        } else {
            fail("Cannot find form markup to conduct test");
        }

        done();
    });
}, 2000);

it("correctly initialises with an element selector", () => {
    const instance: PropForms = new PropForms(form);
    expect(instance.getForm()).toBe(form);
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
