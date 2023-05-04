export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
      <div class="image__holder">
        <img class="image__thumbnail" />
      </div>
      <p class="image__title"></p>
    </section>`;

    this.element = template.content.firstElementChild! as HTMLElement;

    this.createImage(title, url);
    this.createTitle(title);
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }

  createImage(title: string, url: string) {
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;

    imageElement.src = url;
    imageElement.alt = title;
  }

  createTitle(title: string) {
    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;

    titleElement.textContent = title;
  }
}
