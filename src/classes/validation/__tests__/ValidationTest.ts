import PropFormsValidation from "../PropFormsValidation";
import TestUtils from "../../../../TestUtils";
import { PropFormsSettings } from "../../../types/PropFormsSettings";
import { JSDOM } from "jsdom";

const settings: PropFormsSettings = {
    errorClass: "error"
};

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

it("should pass validation if there are no required fields (fields is empty)", () => {
    const validation = new PropFormsValidation(form, [], settings);
    expect(validation.validate()).toBe(true);
});
