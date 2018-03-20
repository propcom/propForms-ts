// The final settings for the instance, after merging with options

type PropFormsSettings = {
    parent?: HTMLElement;
    errorClass: string;
    validators?: { [name: string]: PropFormsValidator<HTMLElement> };
};
