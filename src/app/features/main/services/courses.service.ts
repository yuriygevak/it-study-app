import { Injectable } from '@angular/core';

import { Course } from '../models';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private courses: Course[] = [
        {
            id: '01',
            ref: 'html',
            title: 'HTML',
            topicList: [
                {
                    id: '01_01',
                    title: 'HTML overview',
                },
                {
                    id: '01_02',
                    title: 'The skeleton of an HTML document',
                },
                {
                    id: '01_03',
                    title: 'The process of displaying the page, loading resources, rendering',
                },
                {
                    id: '01_04',
                    title: 'Basic tags',
                },
                {
                    id: '01_05',
                    title: 'Block and linear elements',
                },
                {
                    id: '01_06',
                    title: 'Semantics',
                },
                {
                    id: '01_07',
                    title: 'HTML5 elements',
                },
                {
                    id: '01_08',
                    title: 'Text formatting',
                },
                {
                    id: '01_09',
                    title: 'Form elements',
                },
            ]
        },
        {
            id: '02',
            ref: 'css',
            title: 'CSS',
            topicList: [
                {
                    id: '02_01',
                    title: 'What do you need CSS for?',
                },
                {
                    id: '02_02',
                    title: 'Syntax',
                },
                {
                    id: '02_03',
                    title: 'CSS connection options',
                },
                {
                    id: '02_04',
                    title: 'Styles, the order of application of styles',
                },
                {
                    id: '02_05',
                    title: 'Selectors, importance of selectors, grouping of selectors',
                },
                {
                    id: '02_06',
                    title: 'Short syntax',
                },
                {
                    id: '02_07',
                    title: 'Relative values in CSS',
                },
            ]
        },
        {
            id: '03',
            ref: 'javascript',
            title: 'JAVASCRIPT',
            topicList: [
                {
                    id: '03_01',
                    title: 'Javascript concepts, data types, cast types, variables',
                },
                {
                    id: '03_02',
                    title: 'Objects, arrays',
                },
                {
                    id: '03_03',
                    title: 'Cycles and conditional constructions',
                },
                {
                    id: '03_04',
                    title: 'Functions, scope, closure',
                },
                {
                    id: '03_05',
                    title: 'Timeout, the concept of kolbek',
                },
                {
                    id: '03_06',
                    title: 'The concept of pattern. The main patterns. Pattern "module".',
                },
                {
                    id: '03_07',
                    title: 'Prototypes, OOP',
                },
                {
                    id: '03_08',
                    title: 'Manipulation of DOM, DOM events',
                },
                {
                    id: '03_09',
                    title: 'Asynchrony, AJAX',
                },
                {
                    id: '03_10',
                    title: 'ES6',
                },
                {
                    id: '03_11',
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
