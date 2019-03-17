import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  selectedEmployee : Employee;
  employeeList : Employee[] = [
    { 'EmployeeID': null, 'FirstName': 'Mak', 'LastName' : 'Kad', 'EmpCode': '01', 
      'Position': 'Developer', 'Office': 'abc'},
      { 'EmployeeID': null, 'FirstName': 'Nikita', 'LastName' : 'Kad', 'EmpCode': '02', 
      'Position': 'Developer','Office': 'xyz'},
  ];

  constructor(private http: Http) { }

  getEmployeeList () {
    return this.employeeList;
  }

  postEmployee(emp : Employee) {    
    this.employeeList.push(emp);
    console.log(this.employeeList);
    return 'Inserted...';
    //return this.employeeList
  }

}
