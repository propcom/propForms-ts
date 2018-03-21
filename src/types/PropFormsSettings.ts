// The final settings for the instance, after merging with options

import PropFormsValidator from "../classes/validation/validators/abstract/PropFormsValidator";

export type PropFormsSettings = {
    parent?: HTMLElement;
    errorClass: string;
    validators?: PropFormsValidator<HTMLElement>[];
};
