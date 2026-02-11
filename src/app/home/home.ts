import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = "Kunle"
  age = 90
  students = ['Michael', 'Tolu', 'Shola'];
  weather = "rainy";
  boxVar = true;
  toggle = false;

  changeBox () {
    this.boxVar = !this.boxVar;
  }

  togglePassword() {
    this.toggle  = !this.toggle;
  }
}
