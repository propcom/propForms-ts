import PropFormsValidation from "../PropFormsValidation";
import TestUtils from "../../../../TestUtils";
import { PropFormsSettings } from "../../../types/PropFormsSettings";

const settings: PropFormsSettings = {
    errorClass: "error"
};

let form: HTMLFormElement;

beforeAll(TestUtils.setUp);

beforeEach(() => {
    const element = document.getElementById("form");

    if (element && element instanceof HTMLFormElement) {
        form = element;
    } else {
        fail("Cannot find form markup to conduct test");
    }
});

it("should pass validation if there are no required fields (fields is empty)", () => {
    const validation = new PropFormsValidation(form, [], settings);
    expect(validation.validate()).toBe(true);
});
