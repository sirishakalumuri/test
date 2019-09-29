import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList = [];

  constructor(private route: Router, private emp: EmployeeService) { }

  ngOnInit() {
    this.employeeList=this.emp.getAllEmployees();
  }

  view(index: number) {
    this.emp.selecttedEmployee=index;
    this.route.navigate(['employee']);

  }

}
