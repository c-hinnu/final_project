import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CourseService } from '../course.service';

import { Topic } from '../Topic';
import { Course1 } from '../model/course1';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  title: string='';
  description:string='';
  topics: Topic[]=[];
  file!: File;

  constructor(private http:HttpClient,private courseservice:CourseService){}

  addTopic(): void {
    const topic = new Topic('','');
    this.topics.push(topic);
  }
  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      // Perform additional operations with the selected file if needed
    }
  }
  
    addCourse(): void {
      const course = new Course1(this.title, this.description,this.topics );
      console.log(course)
      this.courseservice.addCourse(course)
        .subscribe(
          (response) => {
            console.log('Course added successfully:', response);
            // Do something with the response if needed
          },
          (error) => {
            console.error('Failed to add course:', error);
            // Handle the error appropriately
          }
        );
    }
  }