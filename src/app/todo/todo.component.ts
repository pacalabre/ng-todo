import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() name: string = '';
  @Input() isComplete: boolean = false;
  @Output() editedName = new EventEmitter();
  @Output() isCompleteChanged = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();
  isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  toggleIsComplete() {
    this.isComplete = !this.isComplete;
    this.isCompleteChanged.emit(this.isComplete);
  }

  editName(event: any) {
    this.editedName.emit(event?.target.value);
  }

  removeItem() {
    this.deleteTodo.emit(true);
  }
}
