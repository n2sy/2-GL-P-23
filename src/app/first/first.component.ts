import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  section = '3-GL-P';
  university: string = 'Tek-up';
  color = 'pink';
  hd = false;

  traitement() {
    //alert('Click détecté');
    this.university = 'Sésame';
  }

  traitementDuFirst(msg) {
    alert(msg);
    //this.section = msg;
  }
}
