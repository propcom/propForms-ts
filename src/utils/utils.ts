export function findElements<T extends HTMLElement>(parent: HTMLElement, selector: string): T[] {
    const results: NodeListOf<T> = parent.querySelectorAll(selector);
    const elements: T[] = [];

    for (let i = 0; i < results.length; i++) {
        elements.push(results.item(i));
    }

    return elements;
}

export function queryElements<T extends HTMLElement>(selector: string): T[] {
    const results: NodeListOf<T> = document.querySelectorAll(selector);
    const elements: T[] = [];

    for (let i = 0; i < results.length; i++) {
        elements.push(results.item(i));
    }

    return elements;
}

export function findParent(className: string, element: HTMLElement): HTMLElement | undefined {
    let current: HTMLElement | undefined = element;

    while (current.parentElement) {
        current = current.parentElement;

        if (current.classList.contains(className)) {
            return current;
        }
    }

    return;
}
