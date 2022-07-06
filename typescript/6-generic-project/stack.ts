{
  interface IStack<T> {
    readonly currentSize: number;
    push(str: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
  };
  class Stack<T> implements IStack<T> {
    private head?: StackNode<T>;
    private size: number = 0;

    constructor(private capacity: number) {}

    get currentSize(): number {
      return this.size;
    }

    public push(str: T): void {
      if (this.size === this.capacity) throw new Error("stack full");
      const newNode = { value: str, next: this.head };
      this.head = newNode;
      this.size++;
    }

    public pop(): T {
      if (this.head == null) {
        throw new Error("no stack");
      }

      const data = this.head?.value;
      this.head = this.head?.next;
      this.size--;

      return data;
    }
  }

  const data = new Stack<string>(5);
  data.push("hello");
  data.push("world");
  data.push("stack");

  console.log(data.currentSize);

  console.log(data.pop());
  console.log(data.pop());
  console.log(data.pop());
}
