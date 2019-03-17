import { Injectable, Inject } from '@angular/core';  
import { Http, Response } from '@angular/http';  
import { Observable, of } from 'rxjs';  
import { Router } from '@angular/router';  
import { map, catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/map';  
//import 'rxjs/add/operator/catch';  
//import 'rxjs/add/observable/throw';

@Injectable()  
export class EmployeeService {  
    myAppUrl: string = ""; 
    empData = [
        {employeeId: 0, name: 'emp1', gender: 'Male', city: 'pune', department: 'testing'},
        {employeeId: 1, name: 'emp2', gender: 'Male', city: 'mumbai', department: 'testing'},
        {employeeId: 2, name: 'emp3', gender: 'Female', city: 'mumbai', department: 'developer'}
    ]; 
    cityList = [
       { cityName: 'pune'},
       { cityName: 'mumbai'},
       { cityName: 'delhi'},
    ]
  
    constructor(private _http: Http) {  
        //this.myAppUrl = baseUrl;  
    }  
  
    getCityList() {  
        
        /*return this._http.get(this.myAppUrl + 'api/Employee/GetCityList')
            .pipe(
                map(res => res.json()),
                catchError(this.errorHandler)
        );*/
        
        return of(this.cityList);
    }  
  
    getEmployees() {  
        /*return this._http.get(this.myAppUrl + 'api/Employee/Index')  
            .pipe(
            map((response: Response) => response.json()),  
            catchError(this.errorHandler)
        );*/
        
        return of(this.empData);
    }  
  
    getEmployeeById(id: number) {  
        /*return this._http.get(this.myAppUrl + "api/Employee/Details/" + id) 
            .pipe( 
                map((response: Response) => response.json()),  
                catchError(this.errorHandler)
            );*/

        let currentEmpForEdit;            
        currentEmpForEdit = this.empData.filter( data => data.employeeId == id );
        console.log(currentEmpForEdit);
        return of(currentEmpForEdit[0]);           
    }  
  
    saveEmployee(employee) {  
        /*return this._http.post(this.myAppUrl + 'api/Employee/Create', employee)
            .pipe(  
                map((response: Response) => response.json()),  
                catchError(this.errorHandler)  
            );*/
        employee.employeeId = this.empData.length + 1; 
        console.log('employee',employee);
        this.empData.push(employee);
        console.log('Employee Added Successfully...', this.empData);
        return of(this.empData);
    }  
  
    updateEmployee(employee) {  
        /*return this._http.put(this.myAppUrl + 'api/Employee/Edit', employee)  
            .pipe(
                map((response: Response) => response.json()),  
                catchError(this.errorHandler)
         ); */ 
         let currentEmpForUpdate;            
         //currentEmpForUpdate = this.empData.filter( data => {                
                //data.employeeId == employee.employeeId        
         //});
         this.empData.forEach((element, index) => {
            if(element.employeeId === employee.employeeId) {
                this.empData[index] = employee;
                currentEmpForUpdate = element[index];
            }
         });
         console.log('currentEmpForUpdate',this.empData);
         //currentEmpForUpdate = employee;
         return of(null);
    }  
  
    deleteEmployee(id) {  
        return this._http.delete(this.myAppUrl + "api/Employee/Delete/" + id) 
            .pipe( 
                map((response: Response) => response.json()),  
                catchError(this.errorHandler)            
        );  
    }  
  
    errorHandler(error: Response) {  
        console.log(error);  
        return Observable.throw(error);  
    }  
}  