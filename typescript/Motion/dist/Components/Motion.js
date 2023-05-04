export default class Motion {
    constructor() {
        this.element = document.createElement("ul");
        this.element.setAttribute("class", "page");
        this.element.textContent = "t1his is Motion";
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=Motion.js.map