{
  interface IStack {
    readonly currentSize: number;
    push(str: string): void;
    pop(): string;
  }

  type StackNode = {
    value: string;
    next?: StackNode;
  };
  class Stack implements IStack {
    private head?: StackNode;
    private size: number = 0;

    constructor(private capacity: number) {}

    get currentSize() {
      return this.size;
    }

    public push(str: string): void {
      if (this.size === this.capacity) throw new Error("stack full");
      const newNode: StackNode = { value: str, next: this.head };
      this.head = newNode;
      this.size++;
    }

    public pop(): string {
      if (!this.size) {
        throw new Error("no stack");
      }
      const data = this.head?.value;
      this.head = this.head?.next;
      this.size--;

      return data || "";
    }
  }

  const data = new Stack(5);
  data.push("hello");
  data.push("world");
  data.push("stack");

  console.log(data.currentSize);

  console.log(data.pop());
  console.log(data.pop());
  console.log(data.pop());
}
