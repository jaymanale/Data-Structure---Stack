class Stack {
  constructor() {
    this.array = [];
  }

// Complexity O(1);
  peek() {
    return this.array[this.array.length - 1];

  }
// Complexity O(1);
  push(value) {

    // Approach 1
    console.log("aaa", this.array.length);
    this.array.push(value);

    // Approach 2- Without function
    //this.array[this.array.length] = value;

    return this;
  }

// Complexity O(1);
  pop() {
    if (!this.array.length) {
      return "No Data to pop.";
    }
    //Approach 1
    //this.array.pop();

    //Approach 2 -Without function
    // let temp = [];
    // for (let i = 0; i < this.array.length - 1; i++) {
    //   temp[i] = this.array[i];
    // }
    // this.array = [...temp];
  
    // approach 3
    this.array.length = this.array.length-1;
   
    return this;
  }

}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
