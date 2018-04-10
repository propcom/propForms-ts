import InvalidEvent from "./model/InvalidEvent";
import PropFormsEvent from "./model/PropFormsEvent";

export default interface EventsMap {
    invalid: InvalidEvent;
    valid: PropFormsEvent;
    enable: PropFormsEvent;
    disable: PropFormsEvent;
};
