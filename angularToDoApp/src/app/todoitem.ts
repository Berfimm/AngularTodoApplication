/*/*Model oluşturna*//**/

//1.Yol
//export class TodoItem {
//  description: string;
//  action: string;

//  constructor(description: string, action: string) {
//    this.description = description;
//    this.action = action;
//  }
//}

//2.Yol
//export class TodoItem {
//  constructor(public description: string, public action: string) {
//    this.description = description;
//    this.action = action;
//  }
  
//}

//const td = new TodoItem("Do Exercise", " Yes");



//3.Yol
export interface TodoItem {
  description: string;
  action: boolean;

}

