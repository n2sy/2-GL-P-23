import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  x = 5;
  selectedCand : Candidat;
  tabCandidats : Candidat[] = [
   
  ];

  recupererCandidat(cand) {
    this.selectedCand = cand;
  }

  constructor(private candSer : ListCandidatsService) { }

  ngOnInit() {
    this.candSer.afficherSalut();
    this.tabCandidats = this.candSer.tabCandidats;
  }

  addCandidat() {
    this.candSer.addNewCandidat();
  }

  showCandidats() {
    console.log(this.candSer.tabCandidats);
    
  }
}
