export default class PropFormsCore {
    private readonly form: HTMLFormElement;
    private options: PropFormsOptions;
    public isDisabled: boolean = false;

    constructor(form: HTMLFormElement, options: PropFormsOptions) {
        this.options = options;
        this.form = form;
    }

    public disable(disable: boolean = true) {
        const opacity: string = disable ? "0.3" : "1.0";

        for (let i = 0; i < this.form.elements.length; i++) {
            const element: HTMLElement = this.form.elements.item(
                i
            ) as HTMLElement;

            if (disable) {
                element.setAttribute("disabled", "true");
                element.style.opacity = opacity;
            } else {
                element.removeAttribute("disabled");
                element.style.removeProperty("opacity");
            }
        }

        this.isDisabled = disable;
    }
}
