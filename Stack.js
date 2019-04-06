class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];

  }

  push(value) {

    // Approach 1
    console.log("aaa", this.array.length);
    this.array.push(value);

    // Approach 2- Without function
    this.array[this.array.length] = value;

    return this;
  }

  pop() {
    if (!this.array.length) {
      return "No Data to pop.";
    }
    //Approach 1
    this.array.pop();

    //Approach 2 -Without function
    let temp = [];
    for (let i = 0; i < this.array.length - 1; i++) {
      temp[i] = this.array[i];
    }
    this.array = [...temp];
    return this;
  }

}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push(20);
myStack.pop();
myStack.pop();
