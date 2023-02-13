import {Component, OnInit} from '@angular/core';
import {RubricaService} from "../../../services/rubrica.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: any

  constructor(private rubricaService: RubricaService) {
  }

  ngOnInit(): void {
    this.getFolks()
  }

  getFolks() {
    this.rubricaService.getFolks().subscribe(res => this.data = res)
  }

  addFolk() {
    this.rubricaService.addFolks('test').subscribe();
    this.ngOnInit();
  }
}
