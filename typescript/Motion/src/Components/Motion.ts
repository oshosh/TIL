export default class Motion {
  wrap: HTMLDivElement | null;

  constructor() {
    this.wrap = document.querySelector(".wrap");
    this.render();
  }

  render() {
    if (this.wrap) {
      this.make();
    }
  }

  public make = (): void => {
    const html = `
    <div>
        테스트
    </div>
    `;

    ((element, html) => {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = html;

      while (!!createDiv.children.length) {
        if (element) {
          element.appendChild(createDiv.children[0]);
        }
      }
    })(this.wrap, html);
  };
}
