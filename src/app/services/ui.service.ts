import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask = new BehaviorSubject<any>(false);
  showAddTask$ = this.showAddTask.asObservable();

  constructor() { }


  onToggle(value): void {
    this.showAddTask.next(value);
  }
}
