abstract class PropFormsValidator<T extends HTMLElement> {
    readonly element: T;

    constructor(element: T) {
        this.element = element;
    }

    abstract validate(): boolean;

    abstract error(): T;

    abstract pass(): T;
}
