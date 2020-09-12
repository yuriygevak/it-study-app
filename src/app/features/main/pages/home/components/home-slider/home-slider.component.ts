import { Component, OnInit } from '@angular/core';

import { Course } from '../../../../models';
import { CoursesService } from '../../../../services';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {

  sliderItems: Course[] = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private coursesServices: CoursesService) { }

  ngOnInit(): void {
    this.sliderItems = this.coursesServices.getAllCourses();
  }

}
