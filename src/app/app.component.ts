import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './interfaces/show.interface';
import { TaskListComponentComponent } from "./components/task-list-component/task-list-component.component";
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [TaskListComponentComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  tasks: Task[] = [
    { id: 1, title: 'Watch Anora', completed: false },
    { id: 2, title: 'Watch Conclave', completed: false },
    { id: 3, title: 'Watch Dune part. 2', completed: false},
    { id: 4, title: 'Watch Im still here', completed: false},
    { id: 5, title: 'Watch Wicked', completed: false}
  ];

  completeTask(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
  

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}