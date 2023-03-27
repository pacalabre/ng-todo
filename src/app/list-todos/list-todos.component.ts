import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  @Input() listOfTodos: Array<{
    id: string;
    name: string;
    isComplete: boolean;
  }> = [];
  @Output() removeItemEvent = new EventEmitter();
  @Output() todoNameUpdated = new EventEmitter();
  @Output() todoIsCompleteUpdated = new EventEmitter();

  removeItem(id: number) {
    this.removeItemEvent.emit(id);
  }

  updateName(value: any, id: string) {
    this.todoNameUpdated.emit({ name: value, id: id });
  }

  updateIsComplete(value: boolean, id: string) {
    this.todoIsCompleteUpdated.emit({ isComplete: value, id: id });
  }
}
