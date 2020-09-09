import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showSearch = false;

  constructor() {}

  toggleSearch($event: boolean): void {
    this.showSearch = $event;
  }

}
