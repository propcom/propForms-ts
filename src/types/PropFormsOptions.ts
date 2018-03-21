// Options that get passed into the constructor

import PropFormsValidator from "../classes/validation/validators/abstract/PropFormsValidator";

export type PropFormsOptions = {
    parent?: HTMLElement;
    errorClass?: string;
    validators?: PropFormsValidator<HTMLElement>[];
};
