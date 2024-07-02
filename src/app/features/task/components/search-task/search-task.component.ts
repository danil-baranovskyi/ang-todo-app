import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-search-task',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './search-task.component.html',
  styleUrl: './search-task.component.scss'
})
export class SearchTaskComponent {

}
