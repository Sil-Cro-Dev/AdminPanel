import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PAGES, Pages} from "../../../../routing";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidenavOpened!: boolean;
  @Output() sidenavToggle: EventEmitter<any> = new EventEmitter();
  pages: Pages[] = PAGES;
}
