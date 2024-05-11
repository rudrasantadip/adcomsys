import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() linkClicked: EventEmitter<string> = new EventEmitter<string>();
  onLinkClick(sectionId: string): void {
    this.linkClicked.emit(sectionId);
  }
}
