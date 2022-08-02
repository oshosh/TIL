export class ImageComponent {
    constructor(title, url) {
        const template = document.createElement("template");
        template.innerHTML = `<section class="image">
      <div class="image__holder">
        <img class="image__thumbnail" />
      </div>
      <p class="image__title"></p>
    </section>`;
        this.element = template.content.firstElementChild;
        this.createImage(title, url);
        this.createTitle(title);
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
    createImage(title, url) {
        const imageElement = this.element.querySelector(".image__thumbnail");
        imageElement.src = url;
        imageElement.alt = title;
    }
    createTitle(title) {
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
}
//# sourceMappingURL=image.js.map