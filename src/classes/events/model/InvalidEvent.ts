import PropFormsEvent from "./PropFormsEvent";
import Invalid from "../../validation/validators/model/Invalid";

export default class InvalidEvent extends PropFormsEvent {
    readonly code: number;
    readonly message: string;

    constructor(name: string, result: Invalid) {
        super(name, result.element);

        this.code = result.code;
        this.message = result.message;
    }
}
