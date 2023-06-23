
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './Topic';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // get(cid: number) {
  //   throw new Error('Method not implemented.');
  // }
  
  url = 'http://localhost:8081/courses'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  addCourse(course: any): Observable<any> {
    console.log(course)
    return this.http.post(this.url, course);
  }

  // getCourseTopics(courseId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${courseId}/topics`);
  // }

  get(cid: number): Observable<any> {
    return this.http.get(`http://localhost:8081/courses/${cid}`);
  }

}