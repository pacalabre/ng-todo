import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent {
  todoName: any = '';
  @Output() todoEvent = new EventEmitter<any>();

  updateName = (event: any) => {
    this.todoName = event.target.value;
  };

  submitNewTodo = () => {
    let newTodo = {
      id: Date.now(),
      name: this.todoName,
      isComplete: false,
    };

    this.todoEvent.emit(newTodo);
    this.todoName = '';
  };
}
