import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() title!: string;
  @Input() columnToShow!: string[];
  @Input() dataSource: any;
  @Input() hasImage: string | undefined;
  @Input() hasCheckbox: string | undefined;

  constructor(private dialog: MatDialog) {
  }

  openDialog(element: any) {

    element.list = true;
    element.title = "Dettaglio" + this.title;
    element.formFields = [
      {type: 'text', label: 'Nome', name: 'nome', value: ''},
      {type: 'text', label: 'Cognome', name: 'cognome', value: ''},
      {type: 'tel', label: 'Numero Telefono', name: 'numero', value: ''},
    ];

    const dialogRef = this.dialog.open(DialogComponent, {
      data: element,
      minWidth: '450px',
      minHeight: '450px',
      enterAnimationDuration: 50,
      exitAnimationDuration: 50,
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

}



