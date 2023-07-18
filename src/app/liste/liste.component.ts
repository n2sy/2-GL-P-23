import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
 allCandidats : Candidat[];
  @Output() candSentToCv = new EventEmitter();

  sendCandToCv(selectedCand) {
    this.candSentToCv.emit(selectedCand)
  }

  constructor(private candSer : ListCandidatsService) {}

  ngOnInit() {
    this.allCandidats = this.candSer.tabCandidats;
  }

  showCandidats() {
    console.log(this.candSer.tabCandidats);
    
  }
}
