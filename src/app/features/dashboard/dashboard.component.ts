import {Component, OnInit} from '@angular/core';
import {RubricaService} from "../../services/rubrica.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: any;

  constructor(private folksService: RubricaService) {
  }

  ngOnInit(): void {
    this.folksService.getFolks().subscribe(res => this.dataSource = res)
  }

  detail = {
    nome: "silvano",
    cognome: "paloni",
    numero: "3216548"
  }

}
