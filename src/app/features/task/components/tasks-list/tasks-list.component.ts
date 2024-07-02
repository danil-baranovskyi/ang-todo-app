import {Component, input} from '@angular/core';
import {TaskTodoComponent} from "../task-todo/task-todo.component";
import {TaskDoneComponent} from "../task-done/task-done.component";
import {MatList, MatListModule, MatListOption} from "@angular/material/list";
import {Task} from "../../task.types";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    TaskTodoComponent,
    TaskDoneComponent,
    MatList,
    MatListOption,
    MatListModule
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  isTodo = input(true);
  tasksList = input<Task[]>([]);
}
