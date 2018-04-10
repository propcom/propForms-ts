// The final settings for the instance, after merging with options

import PropFormsValidator from "../classes/validation/validators/abstract/PropFormsValidator";

export type PropFormsSettings = {
    parent?: string;
    populate: boolean;
    errorClass: string;
    messages: { [n: number]: string };
    validators?: PropFormsValidator<HTMLElement>[];
};
