import PropFormsEvent from "./model/PropFormsEvent";

export default class PropFormsEvents {
    private events: { [name: string]: Array<(e: PropFormsEvent) => void> } = {};

    public on(event: string, fn: (e: PropFormsEvent) => void): boolean {
        if (typeof this.events[event] !== "undefined") {
            this.events[event].push(fn);
            return true;
        }

        this.events[event] = [fn];

        return true;
    }

    public remove(event: string, fn: (e: PropFormsEvent) => void): boolean {
        if (typeof this.events[event] === "undefined") {
            return false;
        }

        this.events[event] = this.events[event].filter(v => {
            return v !== fn;
        });

        return true;
    }

    public dispatch(event: PropFormsEvent) {
        const events = this.events[event.name];

        if (typeof events !== "undefined") {
            events.forEach(fn => {
                fn.call(event.element, event);
            });
        }
    }
}
