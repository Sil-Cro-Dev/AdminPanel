import {Component, Input, OnInit} from '@angular/core';
import {ELEMENT_DATA} from "../../../../assets/Mock/rubrica";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  data = ELEMENT_DATA;



}
