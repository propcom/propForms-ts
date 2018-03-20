import { JSDOM } from "jsdom";
import * as path from "path";

export default class TestUtils {
    public static setUp(done: DoneFn, file: string = "index") {
        JSDOM.fromFile(path.resolve(__dirname, `public/${file}.html`)).then(
            (dom: JSDOM) => {
                document.body.innerHTML = dom.serialize();
                done();
            }
        );
    }
}
