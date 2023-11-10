import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: 'task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  selectedFilter: string = 'all'; 

  @Output() filterSelected = new EventEmitter<string>();

  applyFilter() {
    this.filterSelected.emit(this.selectedFilter);
  }
}