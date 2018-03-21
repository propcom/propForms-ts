import PropFormsEvent from "../events/model/PropFormsEvent";

export function findElements<T extends HTMLElement>(parent: HTMLElement, selector: string): T[] {
    const results: NodeListOf<T> = parent.querySelectorAll(selector);
    const elements: T[] = [];

    for (let i = 0; i < results.length; i++) {
        elements.push(results.item(i));
    }

    return elements;
}
