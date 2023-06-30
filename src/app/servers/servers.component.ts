import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
tabServers = [
  {
    nom : "Production Server",
    type : "small",
    date_d : new Date(),
    statut : 'critical'
  },
  {
    nom : "Development Server",
    type : "medium",
    date_d : new Date(),
    statut : 'stable'
  },
  {
    nom : "Development Test Server",
    type : "small",
    date_d : new Date(),
    statut : 'offline'
  },
  {
    nom : "Nidhal Server",
    type : "small",
    date_d : new Date(),
    statut : 'stable'
  }
];

affecterClasse(st) {
  return {
    'list-group-item-success' : st == "stable",
    'list-group-item-danger' : st == "critical",
    'list-group-item-warning' : st == "offline",
  }
  }

}
