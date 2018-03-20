type PropFormsOptions = {
    parent?: HTMLElement;
    errorClass: string;
    validators?: { [name: string]: PropFormsValidator<HTMLElement> };
};
