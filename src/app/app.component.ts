import { Component } from '@angular/core';

import {EmployeesService} from './employeesService';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employees;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor(employeesService:EmployeesService) {
    // `subscribe` actually initiates the call to the server
    // employeesService.getEmployees().subscribe(result => console.log(result));

    employeesService.getEmployees().subscribe(result => {
                                    this.employees = result;
                                    console.log(result)});
                                    console.log(this.employees);
  }
}
