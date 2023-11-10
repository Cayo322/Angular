// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  currentFilter: string = 'all';

  constructor() {
    this.tasks = [
      { name: 'Tarea 1', completed: false },
      { name: 'Tarea 2', completed: true },
      // Agrega más tareas si es necesario
    ];
  }

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
  }

  applyFilter(filter: string) {
    this.currentFilter = filter;
  }

  get filteredTasks() {
    if (this.currentFilter === 'all') {
      return this.tasks;
    } else if (this.currentFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.currentFilter === 'uncompleted') {
      return this.tasks.filter(task => !task.completed);
    }

    return this.tasks;
  }
}
