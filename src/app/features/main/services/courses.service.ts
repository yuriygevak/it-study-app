import { Injectable } from '@angular/core';

import { Course } from '../models';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private courses: Course[] = [
        {
            id: '01',
            title: 'HTML',
            lessons: [
                {
                    id: '01_01',
                    seqNumber: 1,
                    title: 'HTML overview',
                },
                {
                    id: '01_02',
                    seqNumber: 2,
                    title: 'The skeleton of an HTML document',
                },
                {
                    id: '01_03',
                    seqNumber: 3,
                    title: 'The process of displaying the page, loading resources, rendering',
                },
                {
                    id: '01_04',
                    seqNumber: 4,
                    title: 'Basic tags',
                },
                {
                    id: '01_05',
                    seqNumber: 5,
                    title: 'Block and linear elements',
                },
                {
                    id: '01_06',
                    seqNumber: 6,
                    title: 'Semantics',
                },
                {
                    id: '01_07',
                    seqNumber: 7,
                    title: 'HTML5 elements',
                },
                {
                    id: '01_08',
                    seqNumber: 8,
                    title: 'Text formatting',
                },
                {
                    id: '01_09',
                    seqNumber: 9,
                    title: 'Form elements',
                },
            ]
        },
        {
            id: '02',
            title: 'CSS',
            lessons: [
                {
                    id: '02_01',
                    seqNumber: 1,
                    title: 'What do you need CSS for?',
                },
                {
                    id: '02_02',
                    seqNumber: 2,
                    title: 'Syntax',
                },
                {
                    id: '02_03',
                    seqNumber: 3,
                    title: 'CSS connection options',
                },
                {
                    id: '02_04',
                    seqNumber: 4,
                    title: 'Styles, the order of application of styles',
                },
                {
                    id: '02_05',
                    seqNumber: 5,
                    title: 'Selectors, importance of selectors, grouping of selectors',
                },
                {
                    id: '02_06',
                    seqNumber: 6,
                    title: 'Short syntax',
                },
                {
                    id: '02_07',
                    seqNumber: 7,
                    title: 'Relative values in CSS',
                },
            ]
        },
        {
            id: '03',
            title: 'JAVASCRIPT',
            lessons: [
                {
                    id: '03_01',
                    seqNumber: 1,
                    title: 'Javascript concepts, data types, cast types, variables',
                },
                {
                    id: '03_02',
                    seqNumber: 2,
                    title: 'Objects, arrays',
                },
                {
                    id: '03_03',
                    seqNumber: 3,
                    title: 'Cycles and conditional constructions',
                },
                {
                    id: '03_04',
                    seqNumber: 4,
                    title: 'Functions, scope, closure',
                },
                {
                    id: '03_05',
                    seqNumber: 5,
                    title: 'Timeout, the concept of kolbek',
                },
                {
                    id: '03_06',
                    seqNumber: 6,
                    title: 'The concept of pattern. The main patterns. Pattern "module".',
                },
                {
                    id: '03_07',
                    seqNumber: 7,
                    title: 'Prototypes, OOP',
                },
                {
                    id: '03_08',
                    seqNumber: 8,
                    title: 'Manipulation of DOM, DOM events',
                },
                {
                    id: '03_09',
                    seqNumber: 9,
                    title: 'Asynchrony, AJAX',
                },
                {
                    id: '03_10',
                    seqNumber: 10,
                    title: 'ES6',
                },
                {
                    id: '03_11',
                    seqNumber: 11,
                    title: 'Libraries and frameworks',
                },
            ]
        }
    ];

    getAllCourses(): Course[] {
        return this.courses;
    }

    getCourseById(id: string): Course {
        return this.courses.find(course => course.id === id);
    }
}
