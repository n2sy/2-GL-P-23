import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent {
  idCandidat ;

  cand;
  constructor(private actRoute : ActivatedRoute, private router : Router, private candSer : ListCandidatsService) { }

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

  onDelete() {
    if(confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.cand);
      this.router.navigate(['/cv'])
    }
  }
}
