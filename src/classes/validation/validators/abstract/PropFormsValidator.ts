export default abstract class PropFormsValidator<T extends HTMLElement> {
    readonly element: T;
    protected errorMessage?: string;

    constructor(element: T) {
        this.element = element;
    }

    abstract validate(): boolean;

    abstract error(): T;

    abstract pass(): T;
}
