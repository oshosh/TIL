var Motion = /** @class */ (function () {
    function Motion() {
        var _this = this;
        this.make = function () {
            var html = "\n    <div>\n        \uD14C\uC2A4\uD2B8\n    </div>\n    ";
            (function (element, html) {
                var createDiv = document.createElement("div");
                createDiv.innerHTML = html;
                while (!!createDiv.children.length) {
                    if (element) {
                        element.appendChild(createDiv.children[0]);
                    }
                }
            })(_this.wrap, html);
        };
        this.wrap = document.querySelector(".wrap");
        this.render();
    }
    Motion.prototype.render = function () {
        if (this.wrap) {
            this.make();
        }
    };
    return Motion;
}());
export default Motion;
//# sourceMappingURL=Motion.js.map