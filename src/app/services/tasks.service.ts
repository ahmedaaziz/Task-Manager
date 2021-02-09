import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Array<Task> = []; 

    constructor() {
      /* 
      When page loadig for first time , there is no tasks and value will be null .. 
      so we add a condition if no tasks add empty array , 
      if there are a tasks, we will parse this json to return to its original shape
      */
      let savedTasks = localStorage.getItem('tasks');
      if(savedTasks){
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } else {
        this.tasks = [];
      }
     }

    deleteTask(i){
      this.tasks.splice(i,1);
      this.saveAll();
    }
    saveTask(title,description){

      this.tasks.push({
        title: title,
        description: description
      })
      this.saveAll();

    }
    editTask(i,data){
      this.tasks[i] = data;
      this.saveAll();

    }
    saveAll(){
      // here we will save all tasks and convert it to string to be stored in local storage
      localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }

}
