// Options that get passed into the constructor

type PropFormsOptions = {
    parent?: HTMLElement;
    errorClass?: string;
    validators?: { [name: string]: PropFormsValidator<HTMLElement> };
};
