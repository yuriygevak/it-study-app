import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {
  topic: {id: string; title: string; } = null;
  pageSections: string[] = [
    'theory',
    'examples',
    'practice'
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private coursesServices: CoursesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('topicId')) {
        // redirect
        return;
      }

      const courseId: string = paramMap.get('courseId');
      const topicId: string = paramMap.get('topicId');
      this.topic = this.coursesServices.getCourseById(courseId).topicList
          .find(item => item.id === topicId);

    });
  }

}
