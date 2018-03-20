// This is here just for development, this will not get compiled into the dist folder, only the source in propForms will.
import PropForms from "./PropForms";

const form = document.getElementById("form");

if (form && form instanceof HTMLFormElement) {
    const instance = new PropForms(form);
    const toggle = document.getElementById("toggle");

    toggle &&
        toggle.addEventListener("click", () => {
            if (instance.isDisabled()) {
                instance.enable();
            } else {
                instance.disable();
            }
        });
}
