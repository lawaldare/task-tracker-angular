import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'task tracker';
  showAddTask: boolean;
  constructor(private uiService: UiService) {
    this.uiService.showAddTask$.subscribe((data: boolean) => {
      this.showAddTask = data;
    })
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.onToggle(!this.showAddTask);
  }

}
