import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public tasksSer:TasksService, private pageTitle: Title) {
    
    this.pageTitle.setTitle('HOME - Task Manager')

  }

  ngOnInit(): void {
  }
  deleteTask(i){
    this.tasksSer.deleteTask(i);
  }
}
