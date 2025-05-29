import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList {
  title: string = 'Courses List';
  courses = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular framework.', price: 49, date: '2025-03-01' },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into advanced Angular concepts.', price: 99, date: '2025-04-15' }
  ];
}
