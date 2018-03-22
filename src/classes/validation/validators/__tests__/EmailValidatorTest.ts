import EmailValidator from "../EmailValidator";

let input: HTMLInputElement;
let validator: EmailValidator;

beforeEach(() => {
    input = document.createElement("input");
    input.type = "email";

    validator = new EmailValidator(input);
});

it("should fail validation if no value entered", () => {
    expect(validator.validate()).toBe(false);
});

it("should fail validation if an arbitrary string that is not an email address is entered", () => {
    input.value = "arbitrary";
    expect(validator.validate()).toBe(false);
});

it("should pass validation for this set of emails", () => {
    const data: string[] = [
        "test@example.com",
        "test@x.org",
        "test@x.io",
        "test@x.agency",
        "email@123.123.123.123",
        "1234567890@domain.com",
        "_______@domain.com",
        "firstname-lastname@domain.com",
        "firstname+lastname@domain.com"
    ];

    for (const email of data) {
        input.value = email;
        expect(validator.validate()).toBe(true);
    }
});

// it("should not pass validation for this set of emails", () => {
//     const data: string[] = [
//         "plainaddress",
//         "#@%^%#$@#$@#.com",
//         "@domain.com",
//         "Joe Smith <email@domain.com>",
//         "email.domain.com",
//         "email@domain@domain.com",
//         ".email@domain.com",
//         "email.@domain.com",
//         "email@111.222.333.44444",
//         "email@111.222.333.444.1126",
//         "email@domain..com",
//         "email..email@domain.com"
//     ];
//
//     for (const email of data) {
//         input.value = email;
//         expect(validator.validate()).toBe(false)
//     }
// });
