import { TodoItem } from "./todoitem";

//Componentler arası kullanılan bir model yazıyoruz
export class Model {
  name: string;
  items: TodoItem[];


  constructor() {
    this.name = "Berfim";
    this.items = [
      { description: "Do Exercise", action: true },
      { description: "Have a Lunch", action: true },
      { description: "Meet with Mert", action: false },
      { description: "Meet with Samet", action: false},
      { description: "Meet with Samet", action: true }
    ];
  }
}

const m = new Model();
