import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  showSearch = false;

  constructor() { }

  ngOnInit(): void {}

  toggleSearch($event: boolean): void {
    this.showSearch = $event;
  }

}
