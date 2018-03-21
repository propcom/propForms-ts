import PropFormsValidation from "../PropFormsValidation";
import TestUtils from "../../../../TestUtils";

let validation: PropFormsValidation;

beforeAll(TestUtils.setUp);

beforeEach(() => {
    const form = document.getElementById("form");

    if (form && form instanceof HTMLFormElement) {
        validation = new PropFormsValidation(form, [], {
            errorClass: "error"
        });
    } else {
        fail("Cannot find form markup to conduct test");
    }
});

it("should pass validation if there are no required fields (fields is empty)", () => {
    expect(validation.validate()).toBe(true);
});
