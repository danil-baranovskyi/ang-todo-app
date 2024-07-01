import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TaskComponent} from "./features/task/task.component";
import {MainBoardComponent} from "./core/layout/main-board/main-board.component";

export const routes: Routes = [
  {
    path: '',
    component: MainBoardComponent,
    children: [
      {
        path: '',
        component: TaskComponent,
      }
    ]
  },
];
