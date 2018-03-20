import TestUtils from "../../../../TestUtils";
import PropForms from "../../../PropForms";

beforeEach(TestUtils.setUp);

it("correctly tracks the disabled state", () => {
    const instance: PropForms = new PropForms("#form");
    const form = instance.getForm();

    if (form) {
        instance.disable();
        expect(instance.isDisabled()).toBe(true);
        instance.enable();
        expect(instance.isDisabled()).toBe(false);
    } else {
        fail("No form found to conduct test");
    }
});

it("correctly applies opacity and disabled to all the elements of the form when disabling", () => {
    const instance: PropForms = new PropForms("#form");
    const form = instance.getForm();
    instance.disable();

    if (form) {
        for (let i = 0; i < form.elements.length; i++) {
            const element: HTMLElement = form.elements.item(i) as HTMLElement;
            expect(element.style.opacity).toBe("0.3");
            expect(element.getAttribute("disabled")).toEqual("true");
        }
    } else {
        fail("No form found to conduct test");
    }
});

it("correctly removes the the opacity style and disabled attributes on all form elements when the form is re-enabled", () => {
    const instance: PropForms = new PropForms("#form");
    const form = instance.getForm();

    instance.disable();
    instance.enable();

    if (form) {
        for (let i = 0; i < form.elements.length; i++) {
            const element: HTMLElement = form.elements.item(i) as HTMLElement;
            expect(element.style.opacity).toBe("");
            expect(element.getAttribute("disabled")).toBeFalsy();
        }
    } else {
        fail("No form found to conduct test");
    }
});
