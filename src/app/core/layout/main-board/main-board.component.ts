import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-board',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss'
})
export class MainBoardComponent {

}
