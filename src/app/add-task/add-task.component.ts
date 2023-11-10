import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task', // Corregido el selector
  templateUrl: 'add-task.component.html', // Corregido el templateUrl
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    this.taskAdded.emit(this.taskName);
    this.taskName = '';
  }
}