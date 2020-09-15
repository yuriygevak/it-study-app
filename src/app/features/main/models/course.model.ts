export interface Course {
    id: string;
    ref: string;
    title: string;
    topicList: {id: string; title: string; }[];
}
