import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  lesson: {id: string; title: string; } = null;
  pageSections: string[] = [
    'theory',
    'examples',
    'practice'
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private coursesServices: CoursesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      if (!queryParamMap.has('lessonId')) {
        this.router.navigate(['home']);
        return;
      }

      const courseId: string = queryParamMap.get('courseId');
      const lessonId: string = queryParamMap.get('lessonId');

      this.lesson = this.coursesServices.getCourseById(courseId).lessons
          .find(item => item.id === lessonId);

    });
  }

}
