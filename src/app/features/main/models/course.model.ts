import { Lesson } from './lesson.model';

export interface Course {
    id: string;
    title: string;
    lessons: Lesson[];
}
