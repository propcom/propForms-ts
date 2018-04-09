// Options that get passed into the constructor

import PropFormsValidator from "../classes/validation/validators/abstract/PropFormsValidator";

export type PropFormsOptions = {
    parent?: string;
    populate?: boolean;
    errorClass?: string;
    validators?: PropFormsValidator<HTMLElement>[];
};
