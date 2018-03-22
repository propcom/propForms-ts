import PropForms from "../PropForms";
import TestUtils from "../../TestUtils";
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

it("initialises without crashing", () => {
    new PropForms(form);
});
