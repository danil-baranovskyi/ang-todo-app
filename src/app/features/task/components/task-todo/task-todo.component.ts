import {Component, input} from '@angular/core';
import {TextComponent} from "../../../../components/dumb/text/text.component";
import {Task} from "../../task.types";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton, MatMiniFabButton} from "@angular/material/button";

@Component({
  selector: 'app-task-todo',
  standalone: true,
  imports: [
    TextComponent,
    MatIcon,
    MatButton,
    MatFabButton,
    MatMiniFabButton
  ],
  templateUrl: './task-todo.component.html',
  styleUrl: './task-todo.component.scss'
})
export class TaskTodoComponent {
  task = input<Task>();
}
