import { findParent } from "../utils";

it("should return undefined if the parent isn't in the DOM hierarchy", () => {
    document.body.innerHTML = `
        <div>
            <div class="parent">
                <p>Test</p>
            </div>
            <div class="child">
                <p>Test</p>
            </div>
        </div>`;

    const child = document.querySelector(".child") as HTMLElement;
    const element = findParent("parent", child);

    expect(element).not.toBeDefined();
});

it("should correctly find the parent with the given class name", () => {
    document.body.innerHTML = `
        <div class="parent">
            <div class="child">
                <p>Test</p>
            </div>
        </div>`;

    const child = document.querySelector(".child") as HTMLElement;
    const element = findParent("parent", child);

    expect(element).toBeDefined();
});

it("should keep traversing up the DOM to find the element", () => {
    document.body.innerHTML = `
        <div class="parent">
            <div>
                <p class="child">Test</p>
            </div>
        </div>`;

    const child = document.querySelector(".child") as HTMLElement;
    const element = findParent("parent", child);

    expect(element).toBeDefined();
});
