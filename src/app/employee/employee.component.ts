import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee = {
    "Name": "Aurora",
    "Age": 53,
    "Email": "ante.blandit@disparturient.ca",
    "Street": "493 Iaculis Rd.",
    "City": "Lewiston",
    "Zip": "42591-180",
    "Region": "Maine",
    "Country": "Sudan",
    "Info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
    "EmployeeID": 101,
    "DateOfJoining": "10/06/2019",
    "PhoneNumber": "1628101902299"
  };

  constructor(private route: Router, private emp:EmployeeService) { }

  ngOnInit() {
    this.employee=this.emp.getEmployee();
  }

  back() {
    this.route.navigate(['employeeList']);
  }

}
