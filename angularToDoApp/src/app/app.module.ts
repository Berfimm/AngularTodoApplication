import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponents } from './todo/todo.component';

@NgModule({
  declarations: [
    TodoComponents
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponents]
})
export class AppModule { }
