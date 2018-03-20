export default class PropFormsEvent {
    readonly name: string;
    readonly element: HTMLElement;
    readonly details: { [name: string]: any };

    constructor(
        name: string,
        element: HTMLElement,
        details: { [name: string]: any } = {}
    ) {
        this.name = name;
        this.element = element;
        this.details = details;
    }

    build(): CustomEvent {
        const event: CustomEvent = document.createEvent("CustomEvent");

        event.initCustomEvent(this.name, false, false, this.details);

        return event;
    }
}
