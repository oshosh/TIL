export default class Motion {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "t1his is Motion";
  }
  //afterbegin => element 뒤에
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    // 특정 위치에 노드를 추가합니다.
    parent.insertAdjacentElement(position, this.element);
  }
}
