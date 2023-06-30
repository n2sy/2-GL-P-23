import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent {
  bg;
  cl;
  size;
  font;

  tabFonts = ['', 'Garamond', 'Phosphate', 'Arial'];

  changeSize(sz) {
   

  }
}
