import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincourses',
  templateUrl: './admincourses.component.html',
  styleUrls: ['./admincourses.component.css']
})
export class AdmincoursesComponent {
  constructor(private router: Router) {}
  editCourses()
  {
    this.router.navigate(['/signup']);
  }

}
