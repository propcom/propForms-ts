// This is here just for development, this will not get compiled into the dist folder, only the source in propForms will.
import PropForms from "./PropForms";
import PropFormsEvent from "./classes/events/model/PropFormsEvent";

const form = document.getElementById("form");

if (form && form instanceof HTMLFormElement) {
    const instance = new PropForms(form);
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
