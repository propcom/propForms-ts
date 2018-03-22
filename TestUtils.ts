import { JSDOM } from "jsdom";
import * as path from "path";

export default class TestUtils {
    public static setUp(file: string = "index"): Promise<JSDOM> {
        return JSDOM.fromFile(path.resolve(__dirname, `public/${file}.html`));
    }
}
