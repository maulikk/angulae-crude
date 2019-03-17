import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { EmployeeService } from './service/empservice.service'

import { AppComponent } from './app.component';
import { EmpployeesComponent } from './empployees/empployees.component';
import { EmployeeComponent } from './empployees/employee/employee.component';
import { EmployeeListComponent } from './empployees/employee-list/employee-list.component';

import { FetchEmployeeComponent } from './fetchemployee/fetchemployee.component'; 
import { Createemployee } from './addemployee/addemployee.component'; 
import { registerComponent } from './register/register.component'; 

import { MustMatchDirective } from './register/must-match.directive'

@NgModule({
  declarations: [
    AppComponent,
    EmpployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    FetchEmployeeComponent,
    Createemployee,
    registerComponent,
    MustMatchDirective    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([  
       { path: '', redirectTo: 'emp', pathMatch: 'full' },  
       { path: 'emp', component: EmpployeesComponent },  
       { path: 'fetch-employee', component: FetchEmployeeComponent },
       { path: 'create-employee', component: Createemployee }, 
       { path: 'employee/edit/:id', component: Createemployee }, 
       { path: 'register', component: registerComponent }, 
       // { path: 'register-employee', component: createemployee },  
        //{ path: 'employee/edit/:id', component: createemployee },  
        { path: '**', redirectTo: 'home' }  
      ])  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
