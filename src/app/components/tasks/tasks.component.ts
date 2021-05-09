import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tService: TaskService) { }

  ngOnInit(): void {
    this.tService.getTasks().subscribe(data => {
      this.tasks = data
    })
  }

  deleteTask(id: number) {
    this.tService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== id);
    })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.tService.updateTaskReminder(task).subscribe(() => { })
  }

  addTask(task: Task) {
    this.tService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    })
  }

}
