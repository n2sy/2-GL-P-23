import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  x = 5;
  selectedCand : Candidat;
  tabCandidats : Candidat[] = [
    new Candidat(1, "Bart", "Simpson", 23, "Ingénieur", "bart.jpeg"),
    new Candidat(2, "Homer", "Simpson", 55, "Directeur", "homer.jpg"),
    new Candidat(3, "lisa", "Simpson", 18, "Etudiante", "lisa.png"),
  ];

  recupererCandidat(cand) {
    this.selectedCand = cand;
  }
}
