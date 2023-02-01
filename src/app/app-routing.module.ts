import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},

  { path: '', component: NavComponent, canActivate: [AuthGuard], children: [
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UserListComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
