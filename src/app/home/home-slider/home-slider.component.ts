import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

}
