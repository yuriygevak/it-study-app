import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Course } from '../../models';
import { CoursesService } from '../../services';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  course: Course = null;

  constructor(private activatedRoute: ActivatedRoute,
              private coursesServices: CoursesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('courseId')) {
        // redirect
        return;
      }

      const courseId: string = paramMap.get('courseId');
      this.course = this.coursesServices.getCourseById(courseId);

    });
  }

  selectTheme(theme: string): void {
    console.log('theme', theme);
  }

}
