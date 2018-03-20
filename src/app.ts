// This is here just for development, this will not get compiled into the dist folder, only the source in propForms will.
import PropForms from "./PropForms";

const form = document.getElementById("form");

if (form && form instanceof HTMLFormElement) {
    const instance = new PropForms(form);
    const comments = document.getElementById("comments");
    const toggle = document.getElementById("toggle");
    const validate = document.getElementById("validate");

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

    validate &&
        validate.addEventListener("click", () => {
            console.log(instance.validate());
        });

    form.addEventListener("enable", e => {
        console.log("enabled", e);
    });

    form.addEventListener("disable", e => {
        console.log("disabled", e);
    });

    if (comments) {
        comments.addEventListener("keyup", () => {
            instance.validateField("comments");
        });
    }
}
