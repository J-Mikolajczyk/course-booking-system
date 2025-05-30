import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList {
  title: string = 'Courses List';
  courses = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular framework.', price: 49, date: '2025-03-01', soldOut: false, img: 'angular_gradient.png' },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into advanced Angular concepts.', price: 99, date: '2025-04-15', soldOut: true, img: 'angular_gradient.png' },
  ];

  viewDetails(title: string) {
    alert(`Viewing the details for ${title}`);
  }
}
