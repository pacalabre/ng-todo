import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  listOfTodos: Array<{ id: string; name: string; isComplete: boolean }> = [];

  addTodo(event: any) {
    this.listOfTodos.push(event);
  }

  removeItem(value: any) {
    this.listOfTodos.splice(value, 1);
  }

  updateTodoName(value: any) {
    const todoItem = this.listOfTodos.find((item) => item.id === value.id);
    console.log('update name', todoItem);
    if (todoItem) todoItem.name = value.name;
  }

  updateIsComplete(value: any) {
    const todoItem = this.listOfTodos.find((item) => item.id === value.id);
    if (todoItem) todoItem.isComplete = value.isComplete;
  }
}
