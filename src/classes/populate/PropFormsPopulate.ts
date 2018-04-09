export default class PropFormsPopulate {
    private form: HTMLFormElement;
    private elements: HTMLElement[] = [];

    constructor(form: HTMLFormElement) {
        this.form = form;

        for (let i = 0; i < this.form.elements.length; i++) {
            this.elements.push(this.form.elements.item(i) as HTMLElement);
        }
    }

    public populate() {
        this.elements.forEach(e => {
            if (e instanceof HTMLInputElement) {
                this.populateInput(e);
            }

            if (e instanceof HTMLTextAreaElement) {
                this.populateTextArea(e);
            }

            if (e instanceof HTMLSelectElement) {
                this.populateSelect(e);
            }
        });
    }

    private populateInput(input: HTMLInputElement) {
        switch (input.type) {
            case "email":
                input.value = this.generateEmail();
                break;
            case "text":
                input.value = this.generateText();
                break;
            case "tel":
                input.value = this.generatePhone();
                break;
            case "number":
                input.value = this.generateNumber();
                break;
            case "checkbox":
                input.checked = true;
                break;
            case "radio":
                input.checked = true;
                break;
        }
    }

    private generateEmail(): string {
        return "test@test.com";
    }

    private generateText(): string {
        return "This is some filler text";
    }

    private generatePhone(): string {
        return "+447931670218";
    }

    private generateNumber(): string {
        return (12).toString();
    }

    private populateTextArea(textarea: HTMLTextAreaElement) {
        textarea.value = this.generateText();
    }

    private populateSelect(select: HTMLSelectElement) {
        select.selectedIndex = Math.max(select.options.length - 1, 0);
    }

    public clear() {
        this.elements.forEach(e => {
            if (e instanceof HTMLInputElement) {
                if (e.type !== "submit") {
                    e.value = "";
                    e.checked = false;
                }
            }

            if (e instanceof HTMLTextAreaElement) {
                e.value = "";
            }

            if (e instanceof HTMLSelectElement) {
                e.selectedIndex = 0;
            }
        });
    }
}
