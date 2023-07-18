import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  cand: Candidat;

  constructor(private actRoute : ActivatedRoute, private router : Router, 
    private candSer : ListCandidatsService) { }

  ngOnInit() {
    // this.idCandidat = this.actRoute.snapshot.paramMap.get('id');

    this.actRoute.paramMap.subscribe(
      {
        next : (p : ParamMap) => {
          this.cand = this.candSer.getCandidatById(p.get("id"));
        }
      }
    )
  }

  onSubmit() {
    this.candSer.updateCandidat(this.cand);
    this.router.navigate(['/cv'])
  }
}
