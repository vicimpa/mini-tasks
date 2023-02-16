class ListNode {
  /** @type {any} */
  val = undefined;

  /** @type {ListNode | undefined} */
  next = undefined;

  /**
   * @param {any} val 
   * @param {ListNode} next 
   */
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  valueOf() {
    return this.val;
  }

  toString() {
    let output = '[', current = this;

    while (current) {
      if (current?.val !== undefined) {
        output += current.val;

        if (current?.next)
          output += ', ';
      }

      current = current?.next;
    }

    return output + ']';
  }
}

console.log(new ListNode(1).toString()); // [1]
console.log(new ListNode().toString());  // []