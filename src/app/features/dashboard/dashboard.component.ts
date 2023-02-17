import {Component, OnInit} from '@angular/core';
import {RubricaService} from "../../services/rubrica.service";
import {FormField} from "../../models/formModels";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: any;
  detailsToExport: any

  formFields: FormField[] = [
    {type: 'text', label: 'Nome', name: 'nome', value: ''},
    {type: 'text', label: 'Cognome', name: 'cognome', value: ''},
    {type: 'tel', label: 'Numero Telefono', name: 'numero', value: ''},
  ];

  title: string = 'Rubrica';
  columnToShow: string[] = ['cognome', 'nome', 'numero'];
  avatarField: string = 'avatar';

  constructor(private folksService: RubricaService) {
  }

  ngOnInit(): void {
    this.folksService.getFolks().subscribe(res => this.dataSource = res)
  }

  exportDetails($event: any) {
    this.detailsToExport = $event
  }
}
