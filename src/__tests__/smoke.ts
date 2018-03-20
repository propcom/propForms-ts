import PropForms from "../PropForms";
import TestUtils from "../../TestUtils";

beforeEach(TestUtils.setUp);

it("initialises without crashing", () => {
    new PropForms("#form");
});
