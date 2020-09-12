import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSearchActive = false;

  @Output() searchClickEvent = new EventEmitter<boolean>();

  constructor(private menu: MenuController) { }

  ngOnInit(): void {}

  toggleSearch(): any {
    this.isSearchActive = !this.isSearchActive;
    this.searchClickEvent.emit(this.isSearchActive);
  }

  openMenu() {
    this.menu.open('start');
  }

}
