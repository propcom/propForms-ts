import { JSDOM } from "jsdom";
import * as path from "path";

export default class TestUtils {
    public static setUp(done: DoneFn) {
        JSDOM.fromFile(path.resolve(__dirname, "public/index.html")).then(
            (dom: JSDOM) => {
                document.body.innerHTML = dom.serialize();
                done();
            }
        );
    }
}
