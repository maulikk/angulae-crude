import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(){
    this.employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastName: '',
      EmpCode: '',
      Position: '',
      Office: ''
    }
  } 


  onSubmit(form: NgForm){
    let result;
    console.log(form.value);
    if (form.value.EmployeeID == null){
      result = this.employeeService.postEmployee(form.value);
      console.log("Result : ",result);
    }
  }

}
