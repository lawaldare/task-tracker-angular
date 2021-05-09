import { Task } from 'src/app/Task';
import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  BASE_URL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  // getTasks(): Observable<Task[]> {
  //   return of(TASKS);
  // }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.BASE_URL);
  }

  deleteTask(id: number) {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<Task>(url);
  }


  updateTaskReminder(task: Task) {
    const url = `${this.BASE_URL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.BASE_URL, task, httpOptions)
  }
}
