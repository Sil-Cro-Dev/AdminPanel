import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "../form/form.component";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title!: string;
  @Input() columnToShow!: string[];
  @Input() dataSource: any;
  @Input() hasImage: string | undefined;
  @Input() hasCheckbox: string | undefined;
  @Output() outputData = new EventEmitter;


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  exportData(ppl: any) {
    this.outputData.emit(ppl)
  }

  openDialog(element: any) {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: element,
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

}

