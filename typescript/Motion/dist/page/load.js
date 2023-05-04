import Motion from "../Components/Motion.js";
import { ImageComponent } from "./item/image.js";
class Load {
    constructor(appRoot) {
        this.page = new Motion();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
    }
}
new Load(document.querySelector(".document"));
//# sourceMappingURL=load.js.map