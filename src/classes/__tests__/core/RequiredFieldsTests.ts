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

it("Correctly applies and returns all the required fields", () => {
    const instance: PropForms = new PropForms("#form");
    expect(instance.getRequiredFields().length).toBe(2);
});
