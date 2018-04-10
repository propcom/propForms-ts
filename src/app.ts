// This is here just for development, this will not get compiled into the dist folder, only the source in propForms will.
import PropForms from "./PropForms";
import PropFormsEvent from "./classes/events/model/PropFormsEvent";
import InvalidEvent from "./classes/events/model/InvalidEvent";

const form = document.getElementById("form");

if (form && form instanceof HTMLFormElement) {
    const instance = new PropForms(form, {
        parent: "tester"
    });

    const comments = document.getElementById("comments");
    const toggle = document.getElementById("toggle");
    const validate = document.getElementById("validate");
    const populate = document.getElementById("populate");
    const clear = document.getElementById("clear");

    populate &&
        populate.addEventListener("click", () => {
            instance.populate();
        });

    clear &&
        clear.addEventListener("click", () => {
            instance.clear();
        });

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

    instance.on("valid", e => {
        console.log(e);
    });

    instance.on("invalid", e => {
        console.log(e);
    });

    if (comments) {
        comments.addEventListener("keyup", () => {
            instance.validateField("comments");
        });
    }
}
