import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() sidenavOpened!: boolean;
  @Output() sidenavToggle: EventEmitter<any> = new EventEmitter();
  title = 'AdminPanel';

  sidenavClick() {
    this.sidenavToggle.emit();
  }
}
