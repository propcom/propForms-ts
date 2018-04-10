import FileValidator from "../FileValidator";
import { PropFormsSettings } from "../../../../types/PropFormsSettings";
import PropForms from "../../../../PropForms";

const settings: PropFormsSettings = {
    ...PropForms.defaults,
    fileSize: 0.0005 / 512 * 3 // 3 bytes (ish)
};

let validate: FileValidator;
let element: HTMLInputElement;

class PropFileList implements FileList {
    readonly length: number;

    constructor(length: number) {
        this.length = length;
    }

    item(i: number): File {
        return this[i];
    }

    [index: number]: File;
}

beforeEach(() => {
    document.body.innerHTML = `
        <form id="form">
            <input type="file" id="file">
        </form>`;

    element = document.getElementById("file") as HTMLInputElement;
    validate = new FileValidator(element);
    validate.setSettings(settings);
});

it("should not validate an empty file input", () => {
    const result = validate.validate();
    expect(result.isValid).toBe(false);
});

it("should fail validation if the file is too large", () => {
    const files: PropFileList = new PropFileList(1);

    // 4 bytes file size
    files[0] = new File(["xxxx"], "test.jpg");

    Object.defineProperty(element, "files", {
        get: () => files
    });

    const result = validate.validate();

    expect(result.isValid).toBe(false);
});

it("should fail validation if the one of the files is too large", () => {
    const files: PropFileList = new PropFileList(2);

    files[0] = new File(["xxx"], "test.jpg");
    files[1] = new File(["xxxx"], "hello.jpg");

    Object.defineProperty(element, "files", {
        get: () => files
    });

    const result = validate.validate();

    expect(result.isValid).toBe(false);
});
