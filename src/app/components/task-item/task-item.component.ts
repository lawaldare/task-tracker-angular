import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();


  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(id: number) {
    this.onDeleteTask.emit(id);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task)
  }

}
