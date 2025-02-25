import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Task } from '../../interfaces/show.interface';
import { NgClass, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [NgFor, NgClass, CommonModule],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})

export class TaskListComponentComponent {

  @Input()
  tasks: Task[] = [];
  
  @Output()
  completeTask = new EventEmitter<number>();

  @Output()
  deleteTask = new EventEmitter<number>();

  onComplete(id: number){
    this.completeTask.emit(id);
  }

  onDelete(id: number){
    this.deleteTask.emit(id);
  }
}
