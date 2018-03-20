interface PropFormsValidator<T extends HTMLElement> {
    readonly element: T;

    validate(): boolean;

    error(): T;

    pass(): T;
}
