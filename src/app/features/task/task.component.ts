import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SearchTaskComponent} from "./components/search-task/search-task.component";
import {MatIcon} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Task} from "./task.types";
import {TasksListComponent} from "./components/tasks-list/tasks-list.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatFormField,
    MatInput,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, CommonModule,
    SearchTaskComponent, MatIcon,
    HttpClientModule, MatButton, MatIconButton, TasksListComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  tasksTodoList: Task[] = [
    {
      completed: false,
      content: 'to do some',
      id: '1'
    },
    {
      completed: false,
      content: 'to do some 2',
      id: '2'
    },
  ]
}
