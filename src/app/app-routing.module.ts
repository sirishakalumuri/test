import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { from } from 'rxjs';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'body', component: BodyComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'Lifecycle', component: LifecycleComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
