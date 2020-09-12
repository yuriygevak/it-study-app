import { Injectable } from '@angular/core';

import { Course } from '../models';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private courses: Course[] = [
        {
            id: 'html',
            title: 'HTML'
        },
        {
            id: 'css',
            title: 'CSS'
        },
        {
            id: 'javascript',
            title: 'JAVASCRIPT'
        }
    ];

    getAllCourses(): Course[] {
        return this.courses;
    }

    getCourseById(id: string): Course {
        return this.courses.find(course => course.id === id);
    }
}
