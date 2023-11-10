import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];
  @Output() taskUpdated = new EventEmitter<{ name: string, completed: boolean }[]>();

  // Método para marcar una tarea como completada o no completada
  updateTaskStatus(task: { name: string, completed: boolean }, status: boolean) {
    task.completed = status;
    this.taskUpdated.emit(this.tasks); // Emitir las tareas actualizadas
  }
}