import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private tasksSer:TasksService,
    private Router:Router,
    private pageTitle:Title
  ) { 
    this.pageTitle.setTitle('Add New Task - Task Manager');
  }

  ngOnInit(): void {
  }
  saveTask(title,desc){
    this.tasksSer.saveTask(title.value,desc.value);
    this.Router.navigate(["/"]);
  }
}
