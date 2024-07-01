import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainBoardComponent} from "./core/layout/main-board/main-board.component";
import {IconService} from "./shared/services/icon.services";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainBoardComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private iconService = inject(IconService);

  ngOnInit() {
    this.iconService.init();
  }
}
