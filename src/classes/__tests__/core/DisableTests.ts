import TestUtils from "../../../../TestUtils";
import PropForms from "../../../PropForms";
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

it("correctly tracks the disabled state", () => {
    const instance: PropForms = new PropForms(form);

    instance.disable();
    expect(instance.isDisabled()).toBe(true);
    instance.enable();
    expect(instance.isDisabled()).toBe(false);
});

it("correctly applies opacity and disabled to all the elements of the form when disabling", () => {
    const instance: PropForms = new PropForms("#form");
    instance.disable();

    for (let i = 0; i < form.elements.length; i++) {
        const element: HTMLElement = form.elements.item(i) as HTMLElement;
        expect(element.style.opacity).toBe("0.3");
        expect(element.getAttribute("disabled")).toEqual("true");
    }
});

it("correctly removes the the opacity style and disabled attributes on all form elements when the form is re-enabled", () => {
    const instance: PropForms = new PropForms("#form");

    instance.disable();
    instance.enable();

    for (let i = 0; i < form.elements.length; i++) {
        const element: HTMLElement = form.elements.item(i) as HTMLElement;
        expect(element.style.opacity).toBe("");
        expect(element.getAttribute("disabled")).toBeFalsy();
    }
});
