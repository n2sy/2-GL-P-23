import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class ListCandidatsService {
  tabCandidats : Candidat[] = [
    new Candidat(1, "Bart", "Simpson", 23, "Ingénieur", "bart.jpeg"),
    new Candidat(2, "Homer", "Simpson", 55, "Directeur", "homer.jpg"),
    new Candidat(3, "lisa", "Simpson", 18, "Etudiante", "lisa.png"),
  ]
  constructor() { }

  afficherSalut() {
    console.log("Je suis le service");  
  }

  getCandidatById(id) {
    return this.tabCandidats.find(cand => cand._id == id)
  }

  addCandidat(cand) {
    cand._id = this.tabCandidats[this.tabCandidats.length - 1]._id + 1;
    this.tabCandidats.push(cand);
  }

  deleteCandidat(cand) {
    let i = this.tabCandidats.indexOf(cand);
    this.tabCandidats.splice(i, 1)
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.indexOf(uCand);
    this.tabCandidats[i] = uCand

  }

  addNewCandidat() {
    this.tabCandidats.push(
      new Candidat(1, "NEW", "CANDIDAT", 23, "Ingénieur", "bart.jpeg"),
    )
  }
}
