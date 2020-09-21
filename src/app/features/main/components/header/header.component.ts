import { ActivatedRoute } from '@angular/router';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { MenuController } from '@ionic/angular';

import { CoursesService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSearchActive = false;
  pageTitle = 'IT STARt';

  @Output() searchClickEvent = new EventEmitter<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private menu: MenuController) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      // course page
      if (queryParamMap.has('courseId')) {
        const courseId = queryParamMap.get('courseId');
        this.pageTitle = this.coursesService.getCourseById(courseId).title;
        // lesson page
        if (queryParamMap.has('lessonId')) {
          const lessonSeqNum = this.coursesService.getCourseById(courseId).lessons
              .find(lesson => lesson.id === queryParamMap.get('lessonId')).seqNumber;
          this.pageTitle += ` lesson ${lessonSeqNum}`;
        }
      } else {
        this.pageTitle = 'IT STARt';
      }
    });
  }

  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
    this.searchClickEvent.emit(this.isSearchActive);
  }

  openMenu(): void {
    this.menu.open('start');
  }

}
