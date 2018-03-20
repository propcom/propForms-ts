import TestUtils from "../../../../TestUtils";
import PropForms from "../../../PropForms";

beforeAll((done: DoneFn) => TestUtils.setUp(done, "required"));

it("Correctly applies and returns all the required fields", () => {
    const instance: PropForms = new PropForms("#form");
    const form = instance.getForm();

    if (form) {
        expect(instance.getRequiredFields().length).toBe(2);
    } else {
        fail("Cannot find form to conduct test");
    }
});