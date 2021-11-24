import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component, OnInit } from "@angular/core";
import { Model } from "../model";
import { TodoItem } from "../todoitem";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})

export class TodoComponents {

  message = "";
  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  //private name: string = 'Berfim';


  ///*  items: any[] = [*/
  //items: TodoItem[] = [
  //  {description: "Do Exercise", action: "Yes" },
  //  {description: "Have a Lunch", action: "Yes" },
  //  { description: "Meet with Mert", action: "No" },
  //  { description: "Meet with Samet", action: "Yes" }

  //];

  model = new Model();

  //addItem(txtItem: any) {
  //  console.log(txtItem.value);
  //}
  displayAll: boolean = false;
  inputText: string = "";
  
  //addItem() {
  //  /*console.log(value);*/
  //  /*this.message = value;*/
  //  if (this.inputText != "") {
  //    this.model.items.push({ description: this.inputText, action: false })
  //  }
  //  else {
  //    alert("Enter Value");
  //  }

  //}
  addItem() {
    if (this.inputText != "") {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);

      let items = this.getItemsFromLS();
      items.push(data);

      localStorage.setItem("items", JSON.stringify(items));
    }
    else {
      alert("Enter Value");
    }

  }

  getItemsFromLS() {
    let items: TodoItem[] = [];

    let value = localStorage.getItem("items");

    if (value != null) {
      items = JSON.parse(value);
    }
    return items;
  }
  //checkbox a eklenen eventin metodu. checkbox ile LS i update ediyoruz.
  onActionChanged(item: TodoItem) {
    let items = this.getItemsFromLS();
    localStorage.clear();

    items.forEach(i => {
      if (i.description == item.description) {
        i.action = item.action;
      }

    });
    localStorage.setItem("items", JSON.stringify(items));
  }
  getName() {
    return this.model.name;
  }


  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    else {
      return this.model.items.filter(item => !item.action);
    }


  }
  displayCount() {
    return this.model.items.filter(i => i.action).length;
  }
  //[class] = "getBtnClasses()"
  //getBtnClasses() {
  //  return
  //  {
  //    'disabled'; this.inputText.length == 0;
  //    'btn-secondary'; this.inputText.length == 0;
  //    'btn-primary'; this.inputText.length > 0;
  //  }
  //}
}
