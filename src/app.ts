// This is here just for development, this will not get compiled into the dist folder, only the source in propForms will.
import PropForms, { PropFormsEvent, PropFormsValidator } from "./PropForms";

const form = document.getElementById("form");
const select = document.getElementById("select");

class MyLittleValidator extends PropFormsValidator<HTMLSelectElement> {
    validate(): boolean {
        console.log("Custom validation", this.element);
        return false;
    }

    pass(): HTMLSelectElement {
        return this.element;
    }

    error(): HTMLSelectElement {
        return this.element;
    }
}

if (form && form instanceof HTMLFormElement) {
    const validators: PropFormsValidator<HTMLElement>[] = [];

    select && validators.push(new MyLittleValidator(select as HTMLSelectElement));

    const instance = new PropForms(form, {
        validators
    });

    const comments = document.getElementById("comments");
    const toggle = document.getElementById("toggle");
    const validate = document.getElementById("validate");

    validate &&
        validate.addEventListener("click", () => {
            console.log(instance.validate());
        });

    toggle &&
        toggle.addEventListener("click", () => {
            if (instance.isDisabled()) {
                instance.enable();
                toggle.innerText = "Disable";
            } else {
                instance.disable();
                toggle.innerText = "Enable";
            }
        });

    const callback = (e: PropFormsEvent) => {
        console.log("enable", e);
    };

    instance.on("enable", callback);

    instance.on("disable", e => {
        console.log("disabled a", e);
    });

    if (comments) {
        comments.addEventListener("keyup", () => {
            instance.validateField("comments");
        });
    }
}
