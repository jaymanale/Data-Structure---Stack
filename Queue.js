class Queue {
  constructor(){
    this.array = [];
  }

  peek(){
    return this.array[0];
  }

  enqueue(value){
    this.array[this.array.length] = value;
    return this;
  }

  dequeue(){
    if(!this.array.length){
      return "No data to remove";
    }
let temp=[],j=0;
for(let i=1;i<this.array.length;i++){
  temp[j] = this.array[i];
  j++
}

this.array = [...temp];
return this;
  }


}

let myQue = new Queue();
myQue.enqueue(10);
myQue.enqueue(20);
myQue.enqueue(30);
myQue.enqueue(40);
myQue.peek();
myQue.dequeue();
myQue.dequeue();
myQue.dequeue();
myQue.dequeue();
myQue.dequeue();

