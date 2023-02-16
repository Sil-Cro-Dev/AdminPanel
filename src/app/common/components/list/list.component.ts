import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  addSomething() {
    return console.log("ho cliccato");
  }
}

