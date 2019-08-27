import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'body', component: BodyComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'pagination', component: PaginationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
