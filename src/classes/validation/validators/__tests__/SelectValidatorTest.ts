import SelectValidator from "../SelectValidator";

document.body.innerHTML = `<select name="sel" id="sel">
        <option data-invalid selected>Please select an option</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>`;

const select = document.getElementById("sel") as HTMLSelectElement;
const validator = new SelectValidator(select);

it("should not pass validation if a data-invalid option is selected", () => {
    const result = validator.validate();
    expect(result.isValid).toBe(false);
});

it("should pass validation if an option other than a data-invalid option is selected", () => {
    select.value = "1";
    const result = validator.validate();
    expect(result.isValid).toBe(true);
});
