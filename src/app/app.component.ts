import { Component } from '@angular/core';

import data from './students.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student_app';
  students = data;
}