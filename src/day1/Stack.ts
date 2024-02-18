type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  public head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    if (!this.head) {
      this.head = { value: item };
    }
    this.head = { value: item, next: this.head };
    this.length++;
  }

  pop(): T | undefined {
    if (!this.head) return undefined;

    const { value } = this.head;
    this.head = this.head.next;

    this.length--;
    return value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
