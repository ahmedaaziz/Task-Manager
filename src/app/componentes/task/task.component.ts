import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskId;
  task;
  constructor(private route:ActivatedRoute, private tasksSer: TasksService, private router:Router,private pageTitle:Title) {
    this.pageTitle.setTitle(' Task Manager')
   }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    console.log(this.taskId);
    this.task = this.tasksSer.tasks[this.taskId];
    
  }
  deleteTask(){
    this.tasksSer.deleteTask(this.taskId);
    this.router.navigate(['/'])

  }
  saveTask(){
    this.tasksSer.editTask(this.taskId,this.task);
    this.router.navigate(['/'])
  }
}
